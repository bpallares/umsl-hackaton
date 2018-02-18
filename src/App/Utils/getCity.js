import CityCoords from './cities.json'
import BedRooms from './bedrooms.json'
import Salaries from './salary.json'

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
export const getSalaryCity = (whatJob, whatCity) => {
  return Salaries.type[whatJob].find(element => (
    element.city === whatCity
  ))
}

export const getSalary = (whatJob) => {
  return Salaries.type[whatJob]
}

export const getRating = (salary, type, data) => {
  // console.log(salary, type, data)

  let holder = []

  data.map(e => {
    if (e[type]) {
      // console.log(e.RegionName, e[type], salary / e[type])
      let structure = {
        city: '',
        rate: ''
      }
      structure.city = e.RegionName
      structure.rate = salary / e[type]
      holder.push(structure)
      // console.log(salary / e[type])
    }
  })
  var byRate = holder.slice(0)
  byRate.sort(function (a, b) {
    return b.rate - a.rate
  })
  return byRate
}

/*
let a = []
let b = ['New York', 'Los Angeles', 'Chicago', 'Philadelphia', 'Phoenix', 'Las Vegas', 'San Diego', 'Dallas', 'San Jose', 'Jacksonville', 'San Francisco', 'Indianapolis', 'Detroit', 'Columbus', 'Memphis', 'Charlotte', 'El Paso', 'Boston', 'Seattle', 'Baltimore', 'Denver', 'Washington', 'Nashville', 'Milwaukee', 'Tucson', 'Portland', 'Oklahoma City', 'Omaha', 'Albuquerque', 'Fresno', 'Sacramento', 'Mesa', 'Long Beach', 'Virginia Beach', 'Colorado Springs', 'Atlanta', 'Miami', 'Oakland', 'Tulsa', 'Cleveland', 'Honolulu', 'Minneapolis', 'Baton Rouge', 'New Orleans', 'Arlington', 'Raleigh', 'Wichita', 'Tampa', 'Anaheim', 'Santa Ana', 'Aurora', 'Saint Louis', 'Corpus Christi', 'Cincinnati', 'Pittsburgh', 'Riverside', 'Marietta', 'Anchorage', 'Bakersfield', 'Saint Paul', 'Toledo', 'Silver Spring', 'Lexington', 'Newark', 'Tallahassee', 'Stockton', 'Plano', 'Buffalo']
CityCoords.map(e => a.push(e.city))

// console.log(a)

console.log(a.filter(arr1Item => b.includes(arr1Item)))
*/
