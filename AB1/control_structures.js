// Aufgabe 6: Kontrollstrukturen

// If-Else If
const zahl1 = Math.random(); 
console.log("Zufallszahl:", zahl1);

if (zahl1 > 0.5) {
  console.log("Grösser als 0.5");
} else if (zahl1 > 0.25) {
  console.log("Grösser als 0.25");
} else {
  console.log("Grösser kleiner oder gleich 0.25");
}

// Switch-Case
// Math.floor(Math.random() * 6) ergibt 0, 1, 2, 3, 4 oder 5
const zahl2 = Math.floor(Math.random() * 6); 
console.log("Zufalls-Int:", zahl2);

switch (zahl2) {
  case 1:
    console.log("Der Wert der Zahl ist exakt 1");
    break;
  case 3:
    console.log("Der Wert der Zahl ist exakt 3");
    break;
  default:
    console.log("Der Wert der Zahl ist weder 1 noch 3");
    break;
}