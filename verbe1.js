console.log("Debut de mon programme")
    // Les types de bases:
    // 1-Boolean => logique booléen => algeb de boole
true; // 1
false; // 0

!true
    !false


// Table de vérité de ou logique : OR
true || true //=> true
true || false //=> true
false || true //=> true 
false || false //=> flase


// Table de vérité de et logique : AND
true && true //=> true
true && false //=> flase
false && true //=> flase
false && false //=> flase

// Autres opérateur logique comme le XOR, le HAND

//AAffichage de boolean
console.log("Table de vérité du OR, le OU logique");
console.log("false || false = ", false || false);
console.log("false || true = ", true || true);
console.log("true || false = ", true || false);
console.log("true || true = ", true || true);


//AAffichage de boolean
console.log("Table de vérité du AND,le ET logique");
console.log("false && false = ", false && false);
console.log("false && false = ", false && false);
console.log("false && false = ", false && false);
console.log("false && false = ", false && false);

// 2-Number
console.log("1 : ", 1);
console.log("1.1 : ", 1.2);
console.log("1+1 : ", 1 + 1);

// 2.1 perimetre d'un carré de coté a. périmetre = a + a + a + a = 4*a
//a = 10 
// perimetre = 4*a = 4*10 = 40
//utilisation d'une variable
let b = 20;
let perimetre = 4 * b;
console.log("le perimetre du carré de coté " + b + " est de " + perimetre * b);



// 3- String  chaine de caracteres et identifiable par les doubles cotes " "
console.log("Emile");
console.log("Ben-Duc");
"Emile";
"Ben-Duc";

"Emile" + " " + "Ben-Duc";


// Les types complexe AOK (Array,Object,classe)



// instruction de controle


// Le IF (...){...} ELSE {...}
console.log("Mon super message1")
if (true) {
    console.log("Mon super message2 quand c'est vrai")
} else {
    console.log("Mon super message2 quand c'est faux")
}
console.log("Mon super message3")


//Repeter un truc 
// FOR (...;...;...){...}


for (let increment = 0; increment < 10; increment = increment + 1) {
    console.log("increment = " + increment)

}

for (let i = 0; i < 10; i = i + 1) {
    console.log("increment = " + i)

}

for (let i = 0; i < 99999999999; i++) {
    console.log(i + " : " + "Je dois arriver a l'heur chaque jour sinon je dois copier 100 fois cette ligne")
}


console.log("Fin de mon programme")