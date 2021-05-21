const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//ad1.

const sum = array.reduce((acc, next) => (acc += next));
console.log(sum);

//ad2
// rozumiem że chodziło o dodanie wartości elementów parzystych, a nie samych parzystych indexów ?
// bo jeśli tak to na ile rozumiem, bez filter chyba się nie obejdzie, a jeśli nawet,
// to po co się męczyć pisaniem fora...
const test = array
  .filter((i) => i % 2 === 0)
  .reduce((acc, next) => (acc += next));
console.log(test);

//ad3

const sumAd3 = array.reduce((acc, next) => (acc += next), 10);
console.log(sumAd3);

//ad4
//akumuluator, czy jak kto woli - suma przyrostowa (tak bym ja to nazwał) to wartość początkowa,
// która co do zasady rośnie w wyniku iteracji tablicy, aby na końcu zredukować tę tablicę do samego końcowego
// wyniku (dlatego nazywamy to metodą reduce).
// Często jest to wartość zerowa jako typ prosty number, ale może być też to pusta tablica lub obiekt.
// Jeśli podamy wartość początkową (initialValue), to do jej wartość będą dodawane kolejne wartości, w zależności
// od przekazanego kodu.
// Jeśli wartość początkowa nie zostanie podana - akumulatorem będzie wartość pierwszego (zerowego) indeksu w tablicy.

//ad5
//Zgodnie z tym co mówił Bartek na live (o ile dobrze zrozumiałem) i tym co napisałem wyżej w ad.4, w takim wypadku pierwszym
//"prawdziwym" elementem tablicy będzie index numerowany jako 1. Gdyby nie dodawać wartości początkowej do tablicy, pierwszym elementem będzie
//typowo indeks o wartości 0, tak jak zazwyczaj.
//Krótko mówiąc, indeksy po dodaniu initialValue bezpośrednio w tablicy przestawią się, ulegając zmianie.
//Tak przynajmniej podpowiada mi mój umysł :P

//ad6

function myReduce(reduceThis, initialValue) {
  let sum;
  let index;
  if (initialValue !== undefined) {
    suma = initialValue;
    index = 0;
  } else {
    suma = this[0];
    index = 1;
  }
  for (let i = index; i < array.length; i++) {
    const item = this[i];
    sum = reduceThis(suma, item);
  }
  return sum;
}

//Some,every
const someArray = [11, 3, 5, 31, 31, 54, 23, 14];
//ad7
function biggerThan50(element) {
  return element > 50;
}
const onlyAbove50 = someArray.some(biggerThan50);

console.log(onlyAbove50);

//ad8
function BiggerThan20(element) {
  return element > 20;
}

const onlyAbove20 = someArray.every(BiggerThan20);
console.log(onlyAbove20);

//ad9
//Różnica jest prosta.

//Some zwraca true jeśli chociaż jeden element w tablicy
//spełnia warunek zawarty w przekazanej funkcji.

//Every natomiast zwróci wartość boolean "true" tylko jeśli wszystkie elementy
//w tablicy spełnią warunek z danej funkcji.

//ad.10

const divide = someArray.some(function (element) {
  return element % 7 === 0;
});
if (divide === true) {
  console.log("tablica zawiera element podzielny przez 7");
}
//ad.11

//No, wbrew pozorom wcale nie takie łatwe kurna zadanie.
//Trzeba było zrozumieć do czego może się przydać this (w celu dostania się do elementów tablicy na której działamy),
// i zrozumienie że funkcja/metoda "some" tak naprawdę iteruje tablicę i sprawdza warunek przekazane inną funkcją.
//Komentarze niżej bardziej dla mnie.
//Tym razem nie obyło się bez głebszego szperania w google.

function myFunctionSome(functionWithCondition) {
  const result = []; //zmienna, placeholder w której będzie przechowywany sprawdzany element
  for (
    let i = 0;
    i < this.length;
    i++ // iteracja po tablicy na której działamy
  )
    if (functionWithCondition(this[i]) === true) {
      //jeżeli dany element z tablicy na której działamy spełnia warunek przekazanej funkcji
      result[i] = true;
    } else result[i] = false; //jeśli nie spełnia

  // i tym samym jeśli resultat po sprawdzeniu metodą includes zawiera spełniony warunek "true" to:
  if (result.includes(true)) {
    return true;
  } else {
    return false;
  }
}
//ad.12 EVERY
//to samo, tylko na końcu zmienia się odpowiednio wartość boolean

function myFunctionEvery(functionWithCondition) {
  const result = [];
  for (
    let i = 0;
    i < this.length;
    i++ //
  )
    if (functionWithCondition(this[i]) === true) {
      result[i] = true;
    } else result[i] = false;

  // i tym samym jeśli resultat po sprawdzeniu metodą includes zawiera choć jeden "false" to:
  if (result.includes(false)) {
    return false;
  } else {
    return true;
  }
}

//ad13;

function add(someArray) {
  const check = someArray
    .filter(function (element) {
      if (typeof element === "number") {
        return true;
      }
    })
    .reduce(function (acc, next) {
      return acc + next;
    });
  return check;
}
//ad.14
// troszke nie czaje tresci zadania. Mam odjąc wszystkie elementy po kolei od initialValue, sumy początkowej ?
// jesli tak to kod nizej chyba wystarczajacy.
function minus(arr, initialValue) {
  if (arr || initialValue === undefined) {
    return console.log(
      "Proszę podać wartość początkową drugiego argumentu oraz tablicę!"
    );
  }
  const result = arr.reduce((acc, next) => {
    return acc - next;
  }, initialValue);
  console.log(result);
}
//ad.15
function szukajSzarikSzukaj(arr, value) {
  if (arr || value === undefined) {
    return console.log("Proszę podać tablicę oraz szukaną wartość!");
  }
  const check = arr.some(function (item) {
    return item === value;
  });
  if (check === true) {
    console.log("W tablicy znajduje się szukany element");
  } else console.log("Tablica nie posiada szukanego elementu");
}

//ad.16
function Car(model, yearOfProduction, color) {
  this.model = model;
  this.yearOfProduction = yearOfProduction;
  this.color = color;
  this.drive = () => console.log("ee,brum brum ?");
}

const Tesla = new Car("Tesla", 2021, "white");
const BMW = new Car("BMW", 2020, "black");
//ad.17

// Słowo "new" tworzy NOWY obiekt (nie jest to referencja)
// w oparciu o wzór przekazany przez funkcje kosntruktora
// (wymagane jest podanie odpowiednich wartości argumentów
// które zostaną przypisane przez konstruktor do nowego obiektu)

//ad.18
Car.prototype.tankFuel = function () {
  console.log("Tankujemy do pełna!");
};
Car.prototype.stop = function () {
  console.log("Trafiliśmy na światła czerwone, zatrzymujemy się");
};
