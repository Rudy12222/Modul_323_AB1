// Aufgabe 7: Schleifen

// For-Schleife
console.log(" For-Schleife ");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// While-Schleife 
console.log(" While-Schleife ");
while (true) {
  const zahl = Math.floor(Math.random() * 10) + 1; // 1 bis 10
  console.log("Neue Zahl:", zahl);

  if (zahl > 8) {
    console.log("Abbruch, Zahl > 8!");
    break;
  }
}

// For-Of Schleife (Array)
console.log(" For-Of Schleife ");
const array = ["A", "B", "C", "D", "E"];
for (const element of array) {
  console.log(element);
}