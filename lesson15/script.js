//Ad1

//a
for (i = 1; i < 10; i++) {
  console.log(i);
}

//b
for (i = 9; i > 0; i--) {
  console.log(i);
}
//c

for (i = 5; i < 16; i++) {
  console.log(i);
}
//d
for (i = 0; i > -11; i--) {
  console.log(i);
}
//e
for (i = 0; i < 22; i += 2) {
  console.log(i);
}
//f
for (i = 14; i > -14; i -= 4) {
  console.log(i);
}
//g
for (i = 1; i < 129; i *= 2) {
  console.log(i);
}
//Ad.2

//a
for (i = 0; i < 22; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
//b
for (i = 0; i < 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
//c

for (i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(`Liczba ${i} jest parzysta`);
  } else {
    console.log(`Liczba ${i} jest nieparzysta`);
  }
}
//d
for (i = 1; i < 31; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else console.log(i);
}
//e
for (i = 100; i > -1; i -= 5) {
  if (i % 10 == 0) {
    console.log(i + ` - podzielna przez 10`);
  } else console.log(i);
}

//3

//a

function EndOfLoop(numberEnd) {
  for (i = 0; i < numberEnd; i++) {
    console.log(i);
  }
}
//b

function fifteen(numberStart) {
  if (numberStart < 15) {
    for (i = numberStart; i <= 15; i++) {
      console.log(i);
    }
  } else if (numberStart > 15) {
    for (i = numberStart; i >= 15; i--) console.log(i);
  } else {
    console.log("Podana liczba dla tego przykładu musi być inna niż 15 :)");
  }
}
//c

function iteration(number) {
  if (number !== 0 && number >= 0) {
    for (i = 0; i < 15; i += number) {
      console.log(i);
    }
  } else {
    console.log(
      "Dla tej pętli podany numer do iteracji musi być większy lub równy 0 !"
    );
  }
}
//d

function StartAndEnd(startNumber, endNumber) {
  if (startNumber > endNumber) {
    for (i = startNumber; i > endNumber; i--) {
      console.log(i);
    }
  } else if (startNumber < endNumber) {
    for (i = startNumber; i < endNumber; i++) {
      console.log(i);
    }
  } else {
    console.log("Podane liczby muszą być od siebie różne!");
  }
}
//e
function YourOwnLoop(startNumber, endNumber, iteration) {
  if (startNumber < endNumber && iteration > 0) {
    for (i = startNumber; i < endNumber; i += iteration) {
      console.log(i);
    }
  } else if (startNumber > endNumber && iteration > 0) {
    for (i = startNumber; i > endNumber; i -= iteration) {
      console.log(i);
    }
  } else {
    console.log("Wprowadzono nieprawidłowe argumenty dla wykonania pętli!");
  }
}
//ad.4

//a

function simpleArr() {
  const arr = [1, 2, 3, 4, 5];
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
simpleArr();
//b
function names() {
  const arr = ["Peter", "Sławek", "Nina", "Anna", "Marek"];
  for (i = 0; i < arr.length; i++) {
    console.log(`Cześć, ${arr[i]}!`);
  }
}
names();
//c

function arrCars() {
  const cars = [
    { model: "tesla", kolor: "biały" },
    { model: "Polonez", kolor: "starej rdzy;)" },
    { model: "BMW", kolor: "czarny" },
  ];
  for (i = 0; i < cars.length; i++) {
    console.log(`Przed wami stoi ${cars[i].kolor} ${cars[i].model}`);
  }
}
arrCars();
//d

function ArrEvenNumbers() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(arr[i]);
    }
  }
}
ArrEvenNumbers();

function showOnlyStrings() {
  const arr = [
    1,
    "tylek",
    3,
    true,
    { model: "tesla", kolor: "biały" },
    "żyrafa",
  ];
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      console.log(arr[i]);
    }
  }
}
showOnlyStrings();

const emptyArr = [];
const arrLotsOfTypes = [
  1,
  "tylek",
  3,
  true,
  { model: "tesla", kolor: "biały" },
  "żyrafa",
];
function pushNumbers() {
  for (i = 0; i < arrLotsOfTypes.length; i++) {
    if (typeof arrLotsOfTypes[i] === "number") {
      emptyArr.push(arrLotsOfTypes[i]);
    }
  }
}
//5

//a

newArr = [1, 3, 4, 9, 6];

function addElements(arr) {
  let arrElementsSum = 0;
  for (i = 0; i < arr.length; i++) {
    arrElementsSum += arr[i];
  }
  return arrElementsSum;
}
//b

function separateOddEven(arr) {
  const arrEven = [];
  const arrOdd = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arrEven.push(arr[i]);
    }
    if (arr[i] % 2 !== 0) {
      arrOdd.push(arr[i]);
    }
  }
  return [arrEven, arrOdd];
}
//Zwracam obie tablice w formie kolejnej tablicy :D
//bo jak sam pewnie wiesz JS nie wspiera funkcji które mogą
//zwracać kilka obiektów/zmiennych naraz (co mnie osobiście rozbraja)
//i przy zwracaniu trzeba kombinować z zawijaniem w tablicę albo obiekt.
//Jak jest na to jakiś fajny sposób, to oczywiście wspomnij o nim, na razie
//ten wyżej to chyba najprostszy jaki ogarnąłem na szybkiego.
//Mogłem oczywiście użyć templete string, ale to bez sensu, bo znowu wrzuciło
//by wszystko do jednego worka, tyle że najpierw parszyste, potem nieparzyste.

// Czasami więcej tu kombinowania z innymi "prostymi" pierdołami niż samymi
//pętlami ;)

//c

function checkString(someString) {
  for (i = 0; i < someString.length; i++) {
    if (someString.indexOf("y") > -1) {
      console.log("Jest! Wow, super, ekstra!");
    } else {
      console.log("Nie ma, smuteczek :(");
    }
  }
}

//d
function multiplication(someNumber) {
  let result = someNumber;
  for (i = someNumber - 1; i >= 1; i--) {
    result *= i;
  }
  return result;
}
//e
//Z całym szacunkiem, ale prawdziwym zadaniem było
//tutaj rozczytanie treści polecenia, jego "destruktyryzacja".
//Tekst instrukcji to trochę takie "masło maślane", które może mylić.
//Wystarczyło napisać że należy zsumować elementy podanej tablicy jako jeden numer, albo
//jeden string, w zależności od drugiego podanego argumentu, który ma informować funkcję,
//czy elementy w tablicy zawierają numery bądź stringi, tyle.

let stringsArr = ["kotek", "piesek"];
let numbersArr = [1, 2, 3, 4, 67, 8];

function join(someArr, someString) {
  if (someArr.length == 0) {
    console.log("Tablica nie może być pusta!");
  } else if (someString === "string" && typeof someArr[0] === "string") {
    console.log(someArr.join(""));
  } else if (someString === "number" && typeof someArr[0] === "number") {
    let result = 0;
    for (i = 0; i < someArr.length; i++) {
      result += someArr[i];
    }
    return result;
  } else {
    console.log("Drugi parametr jest nieprawidłowy!");
  }
}
//f
let informationAboutDrivers = [
  {
    name: "Piotr",
    lastName: "Kowalski",
    hasDrivingLicence: true,
    hasCar: true,
  },
  {
    name: "Maria",
    lastName: "Dębińska",
    hasDrivingLicence: true,
    hasCar: false,
  },
  {
    name: "Bartosz",
    lastName: "Bukowski",
    hasDrivingLicence: false,
    hasCar: true,
  },
  {
    name: "Angelika",
    lastName: "Dobroduszna",
    hasDrivingLicence: false,
    hasCar: false,
  },
];

function drivers(driversList) {
  for (i = 0; i < driversList.length; i++) {
    let driver = driversList[i];
    if (driver.hasDrivingLicence === true && driver.hasCar === true) {
      console.log(
        `${driver.name} ${driver.lastName} może Ciebie odwieźć z imprezy!`
      );
    }
    if (driver.hasDrivingLicence === false && driver.hasCar === true) {
      console.log(
        `${driver.name} ${driver.lastName} co prawda posiada samochód, ale nie ma uprawnień do jego prowadzenia. `
      );
    }
    if (driver.hasDrivingLicence === true && driver.hasCar === false) {
      console.log(
        `${driver.name} ${driver.lastName} ma prawo jazdy, ale będzie musiała użyczyć od kogoś auto, gdyż własnego nie posiada. `
      );
    }
    if (driver.hasDrivingLicence === false && driver.hasCar === false) {
      console.log(
        `${driver.name} ${driver.lastName} nie ma ani prawa jazdy, ani samochodu. `
      );
    }
  }
}

//g
const exampleArr = ["Pizza", "Tesla"];
function checkArrElements(arr, newElement) {
  for (i = 0; i < arr.length; i++) {
    if (arr.includes(newElement)) {
      console.log(`Podany element jest już w tablicy!`);
    } else {
      arr.push(newElement);
      console.log("Dodano element do tablicy");
      break;
      //Chytre, jeśli nie każe się zaprzestać w tej chwili wykonywania
      //kodu, instrukcja ponownie sprawdzi tablicę o kolejną iterację,
      //jednocześnie dodając element do tablicu i wypisując że jest już w niej :D
    }
  }
}
