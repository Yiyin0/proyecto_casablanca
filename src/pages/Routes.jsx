import { routes } from '../data/routes'
import { attractions } from '../data/attractions'

function Routes() {
  return (
    <section className="page routes-page">
      <header className="page-heading">
        <p className="page-eyebrow">Recorre y descubre</p>
        <h1>Rutas turísticas</h1>
        <p className="page-intro">
          Explora Casablanca a través de recorridos que conectan
          sus principales espacios históricos y culturales.
        </p>
      </header>

      <div className="routes-grid">
        {routes.map((route) => {
          const routeAttractions = route.attractionIds
            .map((id) => attractions.find((attraction) => attraction.id === id))
            .filter(Boolean)

          return (
            <article className="content-card route-card" key={route.id}>
              <div className="card-body">
                <p className="page-eyebrow">Recorrido turístico</p>
                <h2>{route.name}</h2>

                <p className="route-description">
                  {routeAttractions.length > 0
                    ? 'Descubre los siguientes lugares durante este recorrido.'
                    : 'Próximamente encontrarás más información sobre esta ruta.'}
                </p>

                <div className="route-attractions">
                  <h3>Lugares incluidos</h3>

                  {routeAttractions.length > 0 ? (
                    <ul>
                      {routeAttractions.map((attraction) => (
                        <li key={attraction.id}>{attraction.name}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>Información en preparación.</p>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Routes
