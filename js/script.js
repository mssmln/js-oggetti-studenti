// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// creo l'oggetto student
var student = {
  name : 'Giulia',
  surname : 'Rossi',
  age : 24,
};

// stampiamo le proprietà dell'oggetto
for (var key in student){
  console.log(key + ': ' + student[key]);
}


var students = [
  {
    name : 'Sara',
    surname : 'Bianchi',
    age : 19,
  },
  {
    name : 'Francesca',
    surname : 'Verdi',
    age : 21,
  },
  {
    name : 'Valeria',
    surname : 'Gialli',
    age : 22,
  },
  {
    name : 'Federica',
    surname : 'Neri',
    age : 28,
  },
];


for (var i = 0; i < students.length; i++) {
  console.log('name: ' + students[i].name);
  console.log('surname: ' + students[i]['surname']);


  // console.log(students[key]);
  // così stampa
  // Object { name: "Federica", surname: "Neri", age: 28 }
  // script.js:47:11
  // Object { name: "Federica", surname: "Neri", age: 28 }
  // script.js:47:11
  // Object { name: "Federica", surname: "Neri", age: 28 }
  // script.js:47:11

  for (var key in students){ // con o senza [i] ? non ho visto differenze nella console

    // console.log(students[i].name[key]);
    // così stampa
    // S script.js:46:13
    // a script.js:46:13
    // r script.js:46:13
    // a script.js:46:13
    // F script.js:46:13
    // r script.js:46:13
    // a script.js:46:13
    // n script.js:46:13
    // V script.js:46:13
    // a script.js:46:13
    // l script.js:46:13
    // e script.js:46:13
    // F script.js:46:13
    // e script.js:46:13
    // d script.js:46:13
    // e


    // console.log(key + ': ' + students[i].name);
    // console.log(key + ': ' + students[i].surname);
    // così stampa in questo modo
    // 0: Sara script.js:59:13
    // 0: Bianchi script.js:60:13
    // 1: Sara script.js:59:13
    // 1: Bianchi script.js:60:13
    // 2: Sara script.js:59:13
    // 2: Bianchi script.js:60:13
    // 3: Sara script.js:59:13
    // 3: Bianchi script.js:60:13
    // 0: Francesca script.js:59:13
    // 0: Verdi script.js:60:13
    // 1: Francesca script.js:59:13
    // 1: Verdi
    // ...

    // così undefined
    // console.log(students.name);

    // still undefined
    // console.log(students[i][key]);

    // stampa solo Sara
    // console.log(students[0].name);
  }
}


// creiamo un oggetto e lo pushiamo nell'array students con dati in input
var name = prompt('type your name down');
var surname = prompt('type your surname down');
var age = parseInt(prompt('type your age down'));


var newStudent = {
  name : name,
  surname : surname,
  age : age,
};


students.push(newStudent);
console.log(students);
console.log('a new student has been created!');
console.log('name: ' + students[i].name);
console.log('surname: ' + students[i]['surname']);
