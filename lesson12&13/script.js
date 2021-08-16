//Ad.1

const car = {
  brand: "tesla",
  model: "sedan2021",
  yearOfProduction: 2021,
};

function list(brand, model, yearOfProduction) {
  return `Dane o aucie są następujące:marka: ${car.brand}, model: ${car.model}, rok produkcji: ${car.yearOfProduction}.`;
}
list(car.brand, car.model, car.yearOfProduction);

function object(objectCar) {
  const { brand, model, yearOfProduction } = objectCar;
  return objectCar;
}
object(car);

//Ad.2
// przyznam szczerze że nie do końca rozumiem tę część zadania.
//Mam zdestrukturyzować obiekt utworzony wewnątrz funkcji który jest lokalny
//i co do zasady nie ma do niego dostępu spoza niej ? To w ogóle jest możliwe ?
//jedyne na co wpadłem, to po prostu destrukturyzacja obiektu SPOZA funkcji (globalnego) którego właściwości (klucze) są do niej przekazywane.
const { brand, model, yearOfProduction } = car;
console.log(brand);

//ad.3
//To już jest bardziej zrozumiałe dla mnie. Destrukturyzacja wewnątrz funkcji jest możliwa, bo jest dostęp do przekazanych danych.
function object2(objectCar) {
  const { brand, model, yearOfProduction } = objectCar;
  return `${brand}, ${model}, ${yearOfProduction}`;
}
//ad4.
// Inkrementacja przed lub po zmiennej decyduje po prostu o momencie wykonania instrukcji zwiększenia wartości.
//Jeśli inkrementacja jest PRZED zmienną (np. ++x dla x=5;) to inkrementacja zmienia wartość już w tej samej linii kodu (czyli w momencie przypisania inkrementacji).
//Jeśli inkrementacja jest PO zmiennej (x++ dla x=5) to zwiększenie wartości nastąpi dopiero w NASTĘPNEJ instrukcji.

//let x = 5;
//console.log(x++); //5
//console.log(x); //6

//let x = 5;
//console.log(++x); //6
//console.log(x); //6

//Ad.5

function bin() {
  function rzutZaDwaPkt() {
    aktualnyWynik.stan = aktualnyWynik.stan + 2;
  }
  function rzutZaTrzyPkt() {
    aktualnyWynik.stan = aktualnyWynik.stan + 3;
  }
  function show() {
    console.log(aktualnyWynik.stan);
  }
  const aktualnyWynik = {
    stan: 0,
  };
  function stanPunktacji() {
    console.log(aktualnyWynik.stan);
  }

  return {
    show: stanPunktacji,
    dwa: rzutZaDwaPkt,
    trzy: rzutZaTrzyPkt,
  };
}
//w zasadzie można było wszystko zrobić automatycznie wewnątrz funkcji,
//ale zakładam że chodzi tak jak w przykładzie u bartka - mam mieć nad tym kontrolę,
// tak jak bym sobie naprzemiennie dodawał przyciskami. Tak czy siak przerobione,
// i chyba zrozumiałe :P
const wywołanie = bin();
wywołanie.show();
wywołanie.dwa();
wywołanie.trzy();
wywołanie.dwa();
wywołanie.show();

//Ad.6
const pralka = {
  name: "Frania",
  numberOfFunctions: 3,
  information() {
    console.log(
      `Marka pralki to ${this.name}, posiada  ${this.numberOfFunctions} funkcje`
    );
  },
};
pralka.information();

//Ad.7

// Spróbuje to opisać jak uczniowi który sam dopiero się uczy :)
// Referencja jest odwołaniem do danego obiektu (typu złożonego)
//jeśli do nowej zmiennej przypiszemy uprzednio przydzielony już do innej funkcji obiekt,
// nie jest to de facto jego kopia, a odwołanie się do niego, jak samo słowo referencji wskazuje.
// Oznacza to, że jeśli mamy już jakąs tablicę, i próbujemy ją modyfikować przypisując ją do nowej zmiennej,
//to de facto modyfikujemy także jej orginalną wersję, którą zapewne często chcielibyśmy zostawić w niezmienionej postaci.
// Dlatego gdy chcemy rzeczywiscie działać na kopii obiektu, a nie jego referencji (odwołaniu do orginału), należy posłużyć się
// "spread syntax"

const a = {
  name: "tesla",
};

const b = { ...a };
b.name = "BMW";
//tutaj zamiast działać na orginale poprzez referencje, utworzono kopię obiektu którą zmodyfikowano.
// jest to kopia tzw. obiektu płaskiego. Dla bardziej złożonych obiektów są inne sposoby, ale na razie nie będę tego omawiał :P

//kopia typów prostych jest znacznie łatwiejszym zagadnieniem.
// tutaj faktycznie kopiujemy sobie zmienną z wartościami, ale ich modyfikacja nie wpływa na orginał.

let carTesla = "tesla";

let anotherCar = carTesla;

anotherCar = "BMW";

console.log(carTesla);
console.log(anotherCar);

//Jak widać, w zmiennej anotherCar po przypisaniu uprzedniej CarTesla
//mogliśmy swobodnie nadać nowy string, nie zmieniając pierwszej zmiennej.
//Tym samym mamy dwie kopie typu prostego, ale z różnymi wartościami.
