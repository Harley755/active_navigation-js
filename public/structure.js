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

function isEmpty(schedule) {
    for (const key in schedule) {
        return false;
    }
    return true;
}

console.log('My function : ' + isEmpty(schedule));


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

function calculateSalaries(salaries) {
    for (const key in salaries) {
        if (salaries.hasOwnProperty.call(salaries, key)) {
            const element = salaries[key];
            console.log(key, element);
            sum += element;
        }
    } 
    return sum;
}

console.log(calculateSalaries(salaries));

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

const panier = {
  name: 'CartName',
  pUnitaire: 28.00,
};

const panierClone = {};

for (let key in panier) {
  panierClone[key] = panier[key];
}

console.log('Panier clone ', panierClone.pUnitaire);

console.log(multiplyNumeric(menu));