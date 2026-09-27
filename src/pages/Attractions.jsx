import { attractions } from '../data/attractions'

function Attractions() {
  return (
    <section className="page">
      <h1>Atracciones</h1>
      <ul>
        {attractions.map((attraction) => (
          <li key={attraction.id}>{attraction.name}</li>
        ))}
      </ul>
    </section>
  )
}

export default Attractions
