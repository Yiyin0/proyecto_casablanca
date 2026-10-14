import { Link } from 'react-router-dom'
import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { attractions } from '../data/attractions'

// Centro de Casablanca
const center = [-33.3206, -71.4101]

const pin = L.divIcon({
  className: 'leaflet-pin',
  html: '<span></span>',
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -20],
})

function MapPage() {
  const located = attractions.filter((attraction) => attraction.coords)

  return (
    <section className="page map-page">
      <header className="page-heading">
        <p className="page-eyebrow">Ubica los lugares</p>
        <h1>Mapa</h1>
        <p className="page-intro">
          Toca un punto para ver el nombre del lugar y llegar a su detalle.
        </p>
      </header>

      <div className="map-frame" role="region" aria-label="Mapa de Casablanca">
        <MapContainer
          className="map-canvas"
          center={center}
          zoom={16}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            maxZoom={19}
          />
          {located.map((attraction) => (
            <Marker key={attraction.id} position={attraction.coords} icon={pin}>
              <Popup>
                <strong>{attraction.name}</strong>
                <br />
                <Link to={`/attractions/${attraction.id}`}>Ver detalle</Link>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {located.length === 0 && (
        <p className="map-note">Todavía no hay lugares marcados en el mapa.</p>
      )}
      <p className="map-note">El mapa necesita conexión a internet para cargar.</p>
    </section>
  )
}

export default MapPage