// Ad.1

//a
function sum(a, b, c) {
  return a + b + c;
}
//b
function triangle(a, b) {
  const base = a;
  const height = b;
  const result = (base * height) / 2;
  return `Pole trójkąta to ${result}, czyli ma on ${base} długości i ${height} szerokości`;
}
//c
function driverLiceancePeriod(a, b) {
  return a - b;
}
//d
function fuelUsage(a, b) {
  return (a * b) / 100;
}
//e
function person(a, b, c) {
  return `${a} ma ${b} lata i ${c} dzieci`;
}
//Ad.2

//a

function test(a) {
  return a;
}
//b

//zadziała niezależnie od ilości elementów w tablicy, może być 3 elementowa, może być 5, zawsze zwróci drugi element ;)
function testArray(a) {
  return arr[1];
}
//c
function arrayString(a) {
  const arr = a;
  const arrLength = arr.length;
  const number = arr[2];
  return `Przekazana tablica ma ${arrLength} elementów, a elementem nr 3 jest ${number}`;
}
//d
emptyArray = [];

function addElements(newElement) {
  emptyArray.push(newElement);
  return emptyArray;
}

//e

//stworzony obiekt na potrzeby testów funkcji poniżej
let person1 = {
  name: `Peter`,
  surname: `Hajdorowicz`,
  age: 33,
  height: 176,
};
function nameOfPerson(obj) {
  return obj.name;
}
//f
function informationAboutPerson(obj) {
  return `Imię ${obj.name} i nazwisko ${obj.surname} ma ${obj.age} lat i ${obj.height} cm wzrostu`;
}
//g
function changePersonAge(obj, anotherAge) {
  obj.age = anotherAge;
  return obj.age;
}
//Ad3.

//a
function drivingLicence(age, information) {
  if (age < 18) {
    return "Nie ma prawa jazdy";
  }
  if (age > 18 && information == false) {
    return "Nie ma prawa jazdy";
  } else if (age > 18 && information == true) {
    return "Możesz śmiało jeździć";
  }
}
//b
function StringBuy(a) {
  const argument = a.toString();
  if (argument === "buy") {
    return "Widzę, że chcesz zrobić zakupy";
  } else if (argument === "sell") {
    return "Możesz tutaj swobodnie sprzedawać";
  } else
    return "Nie wybrałeś żadnej z dostępnych opcji - wpisz Kup lub Sprzedaj";
}
//c
function isEven(a) {
  const argument = Number(a);
  if (argument == 0) {
    return "Liczba jest równa 0";
  } else if (argument % 2 == 0) {
    return "Podana liczba jest parzysta";
  } else return "Podana liczba jest nieparzysta";
}
//d
function anotherModulo(a) {
  const argument = Number(a);
  if (argument % 3 == 0 && argument % 5 == 0) {
    return "FizzBuzz";
  } else if (argument % 3 == 0) {
    return "Fizz";
  } else if (argument % 5 == 0) {
    return "Buzz";
  } else return "Not Fizz, neither Buzz ;)";
}
//e
function canYouWatch(a, permission) {
  const result =
    a >= 15
      ? "Możesz obejrzeć film"
      : a < 15 && permission == true
      ? "Możesz obejrzeć film"
      : a < 15 && permission == false
      ? "Nie możesz obejrzeć filmu"
      : "Brakuje danych,proszę uzupełnić argumenty funkcji.";
  return result;
}
//f
function yesOrNo(a) {
  const result = a == true ? "Yes" : a == false ? "No" : "brakuje danych";
  return result;
}
//g
function isEven2(a) {
  const argument =
    Number(a) % 2 == 0
      ? "Podana liczba jest parzysta"
      : "Podana liczba jest nieparzysta";
  return argument;
}

//Ad4

//a
let car = {
  model: `XDuperSuper`,
  brand: `Toyota`,
  yearOfProduction: 2018,
  isCabrio: false,
};
function checkYearAndCabrio(obj) {
  if (obj.yearOfProduction > new Date().getFullYear()) {
    return "Tego auta jeszcze nie wyprodukowano!";
  } else if (obj.yearOfProduction < new Date().getFullYear()) {
    return obj;
  }
}
//b
const someEmptyArray = [];
const anotherArray = ["car", 23, "Peter", false, true, 12];

function checkArray(a) {
  if (a.length == 0) {
    return `Tablica jest pusta`;
  } else {
    return `Tablica ma ${a.length} elementów`;
  }
}
//c
let somebody = {
  name: `Peter`,
  surname: `Hajdorowicz`,
  age: 33,
  likeBooks: true,
  doHaveTV: true,
};
let book = {
  title: `Horus Rising`,
  genre: `dark fantasy`,
  pages: 650,
};
function whatToDo(obj1, obj2) {
  if (obj1.likeBooks == true) {
    return `Cześć ${obj1.name}, polecam Ci przeczytać książkę ${obj2.title}, ma tylko ${obj2.pages} stron. `;
  } else if (obj2.doHaveTV == true) {
    return `Idź oglądać telewizję`;
  } else return `Nie wiem co Ci zaproponować`;
}
