import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-identity">
          <p className="footer-brand">Municipalidad de Casablanca</p>
          <p className="footer-department">Dirección de Relaciones Públicas, Cultura y Turismo</p>
          <p className="footer-description">
            Un espacio para descubrir los atractivos y las rutas turísticas
            de Casablanca.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Navegación del pie de página">
          <h2>Explora</h2>
          <Link to="/attractions">Atractivos turísticos</Link>
          <Link to="/routes">Rutas autoguiadas</Link>
          <Link to="/profile">Perfil</Link>
        </nav>

        <div className="footer-status">
          <h2>Plataforma turística</h2>
          <p>Prototipo en desarrollo</p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Volver al inicio ↑
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Municipalidad de Casablanca · Dirección de Relaciones Públicas, Cultura y Turismo</p>
      </div>
    </footer>
  )
}

export default Footer