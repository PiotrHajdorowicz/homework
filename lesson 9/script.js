//Cześć, to jest jeden z niewielu razów, kiedy autentycznie poczułem,
//że w kodzie rzeczywiście przydają się komentarze, nie tylko dla osoby czytającej po mnie,
//ale także dla mnie. Bez nich można się pogubić ;) Możecie sobie teraz nawigowac ctr+f. Pozdrowienia.

//Part 1

//a
let name = "Karol";
//b
let age = 100;
//c
let isOpen = "true";
//d
let stringBoolean = "true";
//e
let stringNumber = 100;

//Part 2

//a
console.log("Michał");
//b
console.log("Hello Ania");
//c
console.log(4);
//d
console.log(false);

//Part 3

//a
console.log(name); //? Przestarzała ? ale działa.
//b
console.log(age);
//c
console.log(isOpen);
//d
console.log(stringBoolean);
//e
console.log(stringNumber);

//Part 4

//a
console.log(2 + 2);
//b
console.log("Michał" + "Kowalski");
//c
console.log(2 + 2 * 2);

//Part 5

//zmienne
let add = 2 + 3;
//wynik
console.log("wynik", add);

//Part 6
let flexibleValue = 69;
flexibleValue = 6969;
flexibleValue = "thisTimeItsString...and I have dirty mind, sir!";
console.log(flexibleValue);

//Part 7

//a
function addition() {
  const result = 2 + 2;
  console.log(result);
}
addition();

//b
function greetings() {
  const hi = "Hello World!";
  console.log(hi);
}

greetings();

//c
function checkIfTrue() {
  const letitbe_true = "true";
  console.log(letitbe_true);
}
checkIfTrue();

//d
function modulo(a, b) {
  const result = a % b;
  console.log(result);
}
modulo(6, 4);

//e
function power(a, b) {
  const result = a ** b;
  console.log(result);
}
power(3, 4);

//f
function hello(a, b) {
  const result = a + " " + b;
  console.log(result);
}

hello("Hello,", "how are you?");

//g
function multipleTask1(a, b) {
  const result = a * b;
  console.log(result);
}
multipleTask1(5, 60);

//h
function multipleTask2(a, b) {
  const result = a * b;
  console.log(result);
}
multipleTask2(3, 3600);

//i
function itsComplicated(a, b, c) {
  const result = (a * b) / c;
  console.log(result);
}
itsComplicated(10, 9, 2);

//j
function minus(a, b) {
  const result = a - b;
  console.log(result);
}
minus(200, 10);

//Part 8

//a
let tablica_A = [1, 2, 3];
//b
let tablica_B_Samochody = ["Nissan", "Volvo", "Bmw", "Tesla", "Audi"];
//c
let tablica_C = [true, false, true];
//d
let empty_D = [];
//e
let mixed_E = [true, "Nissan", 37, false, "test"];

//f
console.log(mixed_E[3]);

//g
let test_G = [3, "Nissan", true];
console.log(test_G.length);

//h
let anotherEmpty = [];
anotherEmpty.push("Geforce_3080_Ti");
console.log(anotherEmpty);

//Part9

//a
let emptyObject = {};

//b
let person = {
  name: "Iza",
};

//c
let personDetails = {
  name: "Piotr",
  lastName: "Hajdorowicz",
  age: 32,
  drivingLicence: true,
};

//d
console.log(personDetails.age);

//e
console.log(personDetails);

//Part 10

//a
function additionSecond(a, b) {
  return a + b;
}

//b

function text(string) {
  const convert = string;
  convert.toString();
  return "chyba działa, " + convert;
}

//c
function someBoolean(sample) {
  return true;
}

//d
function modulo2(a, b) {
  return a % b;
}

//e
function powerSecond(a, b) {
  return a ** b;
}

//f
function stringsAdded(a, b) {
  let first = a;
  let second = b;
  const convert = a + b;
  convert.toString();
  return convert;
}

//g
function convertMinutesToSeconds(minutes) {
  minutes * 60;
  return convert;
}

//h
function convertHoursToSeconds(hours) {
  return hours * 3600;
}
//i
function triangle(sideOne, sideTwo) {
  return sideOne * sideTwo * 0.5;
}
//j
function yearsToDays(years) {
  return years * 365;
}
//k
function power3(power) {
  return power ** power;
}
//l
function triangle2(side1, side2) {
  return side1 + side2 - 1;
}
//m
function Hello(name) {
  return "Cześć, " + name + "!";
}
//n
function ageSecond(birthDate) {
  return 2021 - birthDate;
}
//o
function score(pointsLower, pointsHigher) {
  return pointsLower * 2 + pointsHigher * 3;
}
