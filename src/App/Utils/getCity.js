import CityCoords from './cities.json'
import BedRooms from './bedrooms.json'

export const getCityObject = (cityNeeded) => {
  return CityCoords.find((element) => (
    element.city === cityNeeded
  ))
}

export const getBedRooms = (cityNeeded) => {
  return BedRooms.find((element) => (
    element.RegionName === cityNeeded
  ))
}
