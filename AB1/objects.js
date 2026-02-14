// Aufgabe 4: Objekte

// Objekt mit 3 Eigenschaften
const person = {
  name: "Anwar",        // String
  alter: 18,            // Number
  istStudent: true      // Boolean
};

console.log("Name:", person.name);
console.log("Alter:", person.alter);
console.log("Ist Student:", person.istStudent);

// Verschachteltes Objekt
const personMitAdresse = {
  name: "Anwar",
  alter: 18,
  adresse: {              // verschachteltes Objekt
    strasse: "Coolestrasse 2",
    plz: 3000,
    ort: "Bern"
  }
};

console.log("Adresse Ort:", personMitAdresse.adresse.ort); 
