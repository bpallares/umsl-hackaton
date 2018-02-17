import CityCoords from './cities.json'

export const getCityObject = (cityNeeded) => {
  return CityCoords.find((element) => (
    element.city === cityNeeded
  ))
}
