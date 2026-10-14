import { Link, useParams } from 'react-router-dom'
import { attractions } from '../data/attractions'
import { routes } from '../data/routes'

function AttractionDetail() {
  const { id } = useParams()
  const attraction = attractions.find((item) => item.id === Number(id))

  if (!attraction) {
    return (
      <section className="page">
        <Link className="back-link" to="/attractions">
          Volver a Atractivos
        </Link>
        <h1>Atractivo no encontrado</h1>
        <p>No existe un atractivo con ese número.</p>
      </section>
    )
  }

  const inRoutes = routes.filter((route) =>
    route.attractionIds.includes(attraction.id),
  )

  return (
    <section className="page attraction-detail-page">
      <Link className="back-link" to="/attractions">
        Volver a Atractivos
      </Link>

      <article className="detail-article">
        <img className="detail-photo" src={attraction.image} alt={attraction.name} />

        <div className="detail-text">
          <h1>{attraction.name}</h1>
          <p>{attraction.description}</p>

          {inRoutes.length > 0 && (
            <div className="detail-routes">
              <h2>Aparece en estas rutas</h2>
              <ul>
                {inRoutes.map((route) => (
                  <li key={route.id}>
                    <Link to={`/routes/${route.id}`}>{route.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
    </section>
  )
}

export default AttractionDetail