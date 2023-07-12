// Number(...) convertit explicitement en nombre
// Math.trunc est une fonction intégrée qui supprime la partie décimale
console.log( String(Math.trunc(Number("49"))) ); // "49", identique, propriété entière
console.log( String(Math.trunc(Number("+49"))) ); // "49", non identique "+49" ⇒ propriété non entière
console.log( String(Math.trunc(Number("1.2"))) ); // "1", non identique "1.2" ⇒ propriété non entière

// Écrivez le code, une ligne pour chaque action :
// Créer un objet vide user.
let user = {};

// Ajoutez la propriété name avec la valeur John.
user.name = 'John';

// Ajoutez la propriété surname avec la valeur Smith.
user.surname = 'Smith';

// Changer la valeur de name pour Pete.
user.name = 'Pete';

// Supprimez la propriété name de l’objet.
delete user.name

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false