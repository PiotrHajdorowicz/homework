const rentalCarCompany = [
  {
    name: "audi",
    allCarsNumber: 70,
    carsToRent: 30,
    price: 140,
  },
  {
    name: "fiat",
    allCarsNumber: 120,
    carsToRent: 120,
    price: 90,
  },
  {
    name: "bwm",
    allCarsNumber: 50,
    carsToRent: 50,
    price: 430,
  },
  {
    name: "ferrari",
    allCarsNumber: 3,
    carsToRent: 1,
    price: 1200,
  },
  {
    name: "mustang",
    allCarsNumber: 13,
    carsToRent: 3,
    price: 650,
  },
  {
    name: "mercedes",
    allCarsNumber: 22,
    carsToRent: 12,
    price: 340,
  },
];

//a
// Chytre zadanie. Funkcja sort zmienia także oryginalną tablicę,
// więc gdybym chciał zrobić osobną posortowaną alfabetycznie, za każdym razem muszę także użyć wcześniej metody mapującej
// bo inaczej kolejne metody sortujące będą na nowo zmieniać użyty wcześniej oryginał.
// Jedynie z metodą "filter" nie ma problemu, bo tworzy nową tablicę ze skopiowanymi elementami spełniającymi warunek, nie zmieniając oryginału.
// Zaczynam czaić czemu w excelu nie można sobie niewiadomo iloma warunkami sortować danych bez ich ówczesnego skopiowania do innych arkuszy XD
{
  const alphabeticalOrder = rentalCarCompany.map(function (obiekt) {
    return obiekt;
  });
  alphabeticalOrder.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  console.log(alphabeticalOrder);
}
//b
const newRentalBelow400 = rentalCarCompany.filter((car) => car.price <= 400);
console.log(newRentalBelow400);
//c
const priceSort = rentalCarCompany.map(function (obiekt) {
  return obiekt;
});

priceSort.sort(function (a, b) {
  return a.price - b.price;
});
console.log(priceSort);

//d
const availableBrands = rentalCarCompany.filter(
  (car) => car.allCarsNumber == car.carsToRent
);
console.log(availableBrands);
//e

const sortedByAvailability = rentalCarCompany.sort(function (a, b) {
  return b.carsToRent - a.carsToRent;
});
console.log(sortedByAvailability);

//f
const affordableFor7Days = rentalCarCompany.filter(
  (car) => car.price * 7 <= 3500
);
console.log(affordableFor7Days);

//g
//A to było całkiem fajne. Do pokombinowania.
const last = rentalCarCompany
  .map((car) => ({
    ...car,
    percentageOfUsage: Math.round((car.carsToRent / car.allCarsNumber) * 100),
  }))
  .sort(function (a, b) {
    return b.percentageOfUsage - a.percentageOfUsage;
  })
  .slice(0, 3);

console.log(last);
