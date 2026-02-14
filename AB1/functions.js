// Aufgabe 8: Funktionen

// Produkt berechnen
function produkt(a, b) {
  const result = a * b;
  console.log("Produkt:", result);
}
produkt(2, 3);
produkt(10, 5);

// Celsius in Fahrenheit
function celsiusZuFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  console.log(`${celsius}°C = ${fahrenheit}°F`);
}
celsiusZuFahrenheit(0);
celsiusZuFahrenheit(20);

// Arrow Function für Modulo
const modulo = (a, b) => a % b;

console.log("Modulo 10 % 3:", modulo(10, 3)); // 1
console.log("Modulo 20 % 6:", modulo(20, 6)); // 2

// Unterschied: Arrow Functions haben kein eigenes 'this' und sind kürzer.