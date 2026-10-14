import museo from '../assets/museo.jpg'
import plaza from '../assets/plaza.jpg'
import parroquia from '../assets/parroquia.jpg'
import centroCultural from '../assets/centroCultural.jpg'
import biblioteca from '../assets/biblioteca.jpg'
import teatro from '../assets/teatro.png'

// coords: [latitud, longitud]. Cuando un atractivo tiene coordenadas, aparece en el mapa.
export const attractions = [
  {
    id: 1,
    name: 'Museo Arqueológico y Antropológico de Casablanca',
    description: 'Espacio cultural municipal que exhibe patrimonio arqueológico y antropológico de la comuna.',
    image: museo,
    coords: null,
  },
  {
    id: 2,
    name: 'Plaza de Armas de Casablanca',
    description: 'Plaza central de la comuna, punto de encuentro histórico junto a la Parroquia Santa Bárbara.',
    image: plaza,
    coords: null,
  },
  {
    id: 3,
    name: 'Parroquia Santa Bárbara',
    description: 'Iglesia principal de Casablanca, dedicada a Santa Bárbara, patrona de la comuna.',
    image: parroquia,
    coords: null,
  },
  {
    id: 4,
    name: 'Biblioteca Municipal',
    description: 'Espacio cultural municipal de acceso público ubicado dentro del complejo del Centro Cultural de Casablanca.',
    image: biblioteca,
    coords: [-33.320855, -71.410977]
  },
  {
    id: 5,
    name: 'Centro Cultural de Casablanca',
    description: 'Espacio municipal dedicado a actividades y difusión cultural de la comuna.',
    image: centroCultural,
    coords: null,
  },
  {
    id: 6,
    name: 'Teatro Municipal',
    description: 'Espacio cultural municipal para presentaciones y eventos.',
    image: teatro,
    coords: null,
  },
]