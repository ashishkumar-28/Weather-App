let cities = [];

export function addCity(city) {
  cities.push(city);
}

export function removeCity(city) {
  cities = cities.filter(c => c !== city);
}

export function getCities() {
  return cities;
}
