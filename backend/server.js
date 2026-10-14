
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

app.get('/api/health', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT current_database() AS database, NOW() AS server_time'
    );

    res.json({
      status: 'ok',
      message: 'Backend conectado a PostgreSQL',
      database: result.rows[0].database,
      serverTime: result.rows[0].server_time,
    });
  } catch (error) {
    console.error('Error al consultar PostgreSQL:', error.message);

    res.status(500).json({
      status: 'error',
      message: 'No se pudo consultar la base de datos',
    });
  }
});

app.get('/api/atractivos', async (req, res) => {
  const idioma = req.query.idioma || 'es';

  try {
    const result = await pool.query(
      `
      SELECT
        a.id,
        a.estado,
        a.imagen_principal,
        ST_Y(a.ubicacion::geometry) AS latitud,
        ST_X(a.ubicacion::geometry) AS longitud,
        t.nombre,
        t.descripcion,
        t.imagen_texto_alternativo AS texto_alternativo,
        COALESCE(
          (
            SELECT json_agg(
              json_build_object(
                'id', c.id,
                'codigo', c.codigo,
                'nombre', ct.nombre,
                'icono', c.icono_codigo
              )
            )
            FROM atractivo_categoria ac
            JOIN categoria_atractivo c
              ON c.id = ac.categoria_id
            LEFT JOIN categoria_atractivo_traduccion ct
              ON ct.categoria_id = c.id
              AND ct.idioma_codigo = t.idioma_codigo
            WHERE ac.atractivo_id = a.id
              AND c.activo = TRUE
          ),
          '[]'::json
        ) AS categorias
      FROM atractivo a
      JOIN atractivo_traduccion t
        ON t.atractivo_id = a.id
      WHERE t.idioma_codigo = $1
      ORDER BY t.nombre;
      `,
      [idioma]
    );

    res.json({
      total: result.rows.length,
      idioma,
      atractivos: result.rows,
    });
  } catch (error) {
    console.error('Error al consultar atractivos:', error.message);

    res.status(500).json({
      status: 'error',
      message: 'No se pudieron consultar los atractivos',
    });
  }
});

const PORT = Number(process.env.PORT) || 3000;

const server = app.listen(PORT, () => {
  console.log(`Backend disponible en http://localhost:${PORT}`);
});

async function shutdown() {
  await pool.end();
  server.close(() => process.exit(0));
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
