import { Link, useParams } from 'react-router-dom'
import { routes } from '../data/routes'
import { attractions } from '../data/attractions'

function RouteDetail() {
  const { id } = useParams()
  const route = routes.find((item) => item.id === Number(id))

  if (!route) {
    return (
      <section className="page">
        <Link className="back-link" to="/routes">
          Volver a Rutas
        </Link>
        <h1>Ruta no encontrada</h1>
        <p>No existe una ruta con ese número.</p>
      </section>
    )
  }

  const stops = route.attractionIds
    .map((attractionId) =>
      attractions.find((attraction) => attraction.id === attractionId),
    )
    .filter(Boolean)

  return (
    <section className="page route-detail-page">
      <Link className="back-link" to="/routes">
        Volver a Rutas
      </Link>

      <header className="page-heading">
        <p className="page-eyebrow">Ruta</p>
        <h1>{route.name}</h1>
        <p className="page-intro">
          {stops.length === 1 ? '1 parada' : `${stops.length} paradas`}. Sigue
          las paradas en el orden indicado.
        </p>
      </header>

      {stops.length > 0 ? (
        <ol className="stop-list">
          {stops.map((stop, index) => (
            <li className="stop" key={stop.id}>
              <span className="stop-number" aria-hidden="true">
                {index + 1}
              </span>
              <div className="stop-body">
                <img src={stop.image} alt={stop.name} loading="lazy" />
                <div className="stop-text">
                  <h2>
                    <Link to={`/attractions/${stop.id}`}>{stop.name}</Link>
                  </h2>
                  <p>{stop.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <p className="page-intro">Información en preparación.</p>
      )}
    </section>
  )
}

export default RouteDetail