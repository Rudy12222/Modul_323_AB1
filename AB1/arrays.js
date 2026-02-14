// Aufgabe 5: Arrays

// Liste mit 3 Strings
const liste = ["Apfel", "Banane", "Birne"];
console.log("Ganze Liste:", liste);

// Zweites Element ausgeben
console.log("Zweites Element:", liste[1]); 

// Objekt hinzufüge
liste.push({
  name: "Orange",
  farbe: "orange"
});
console.log("Nach Push:", liste);

// Entfernen: Anfang (shift) und Ende (pop)
liste.shift(); // Entfernt "Apfel"
liste.pop();   // Entfernt das Objekt am Ende
console.log("Nach Shift und Pop:", liste);