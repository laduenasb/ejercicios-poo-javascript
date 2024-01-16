class Persona{
    constructor(nombre, edad){
        this.nombre = nombre,
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre} tengo ${this.edad} años`);
    }
}

let persona1 = new Persona ("Gabriel", 30);
let persona2 = new Persona ("Alejandro", 26);
let persona3 = new Persona ("Pedro", 23);
let persona4 = new Persona ("Pablo", 45);
let persona5 = new Persona ("Luis", 68);