import { routes } from '../data/routes'

function Routes() {
  return (
    <section className="page">
      <h1>Rutas</h1>
      <ul>
        {routes.map((route) => (
          <li key={route.id}>{route.name}</li>
        ))}
      </ul>
    </section>
  )
}

export default Routes
