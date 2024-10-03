// Array of cities
const cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris",
];

//================= Task 1 ==================

const citiesCapitalized = cities.map((value, index, arr) => {
  arr[index] = capitalizeFirstLetter(arr[index]);
});
console.log(cities);

function capitalizeFirstLetter(cityName: string) {
  return cityName[0].toUpperCase() + cityName.slice(1);
}

//================= Task 2 ==================

cities.forEach((value, index, arr) => {
  arr[index] = assignCityIndex(arr[index], index);
});
console.log(cities);

function assignCityIndex(cityName: string, cityIndex: number) {
  return cityIndex + 1 + `. ` + cityName;
}
