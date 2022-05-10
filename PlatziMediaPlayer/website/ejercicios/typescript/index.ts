/*
//boolean
let muted:boolean = true;
muted = false;

//numeros
let age = 6;
let numerador:number = 42;
let denominador:number = age;
let resultado = numerador / denominador;

//string
let nombre: string = 'Israel'
let saludo = `Me llamo ${nombre}`;

//Arreglos
let people:string[] = [];
people = ["israel","miriam","karen"];
//people.push("9");

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push("Israel");
peopleAndNumbers.push(9);

//enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito: Color = Color.Rojo
console.log(`Mi color favorito es ${colorFavorito}`)

//Any
let comodin:any = "Joker";
comodin = {type: "wildcard"};

//Object
let someObject:object = {type: "wildcard"};
*/

/*
//Funciones
function add(a:number, b:number): number{
    return a + b;
}

const sum = add(4,6);

function createAdder(a:number): (number) => number{
    return function(b:number){
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firsName: string, lastName:string = 'Lopez'): string {
    return `${firsName} ${lastName}`;
}

const israel = fullName('Israel');
console.log(israel);
*/

//Interfaces
enum Color {
    Rojo = "Rojo",
    Verde = "Verde"
}

interface Rectangulo {
    ancho: number;
    alto: number;
    color?:Color,
}

let rect: Rectangulo = {
    ancho:4,
    alto:6,
    color:Color.Rojo,
}

function area(r: Rectangulo){
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function(){
    return this.color?`Un rectangulo ${this.color}`: `Un rectangulo`;
}

console.log(rect.toString())