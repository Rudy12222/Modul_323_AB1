// Aufgabe 3: Primitive Datentypen

// String
let meinText = "Hallo Welt";
console.log(meinText);

// Weitere Datentypen
// Number
let meineZahl = 42;
console.log(meineZahl);

// Boolean
let istAktiv = true;
console.log(istAktiv);

// Undefined
let ohneInhalt;
console.log(ohneInhalt);

// var Tests
// Typänderung (Funktioniert)
var meineVariable = "Ich bin ein Text";
console.log("Wert vor der Änderung:", meineVariable);
console.log("Typ vor der Änderung:", typeof meineVariable);

meineVariable = true;
console.log("Wert nach der Änderung:", meineVariable);
console.log("Typ nach der Änderung:", typeof meineVariable);

// Doppelte Deklaration mit var (Funktioniert ohne Fehler)
var testVariable = "Erste Deklaration";
console.log(testVariable);
var testVariable = "Zweite Deklaration";
console.log(testVariable);

// let Test (habe es als kommentar gemacht weil sonst geht kaputt)
// Doppelte Deklaration mit let (Würde Fehler werfen!)
// let counter = 1;
// console.log(counter);
// let counter = 2; 
// console.log(counter);


// const Test
const pi = 3.14;
console.log(pi);
// pi = 3.14159; // Würde Fehler werfen: TypeError

//undefined vs null Vergleich
const varUndefined = undefined;
const varNull = null;

console.log("Vergleich ==", varUndefined == varNull);  // true
console.log("Vergleich ===", varUndefined === varNull); // false

// Namenskonvention: camelCase