// Declaracion de clase

class Papel{
	constructor(alto,ancho){
		this.alto;
		this.ancho=ancho;
	}
}

// Expresion de clase ANONIMA a traves de una variable

let PapelA = class{
	constructor(alto,ancho){
		this.alto=alto;
		this.ancho=ancho;
	}
}

// Expresion de clase NOMBRADA a traves de una variable

let carton = class Carton1{
	constructor(alto,ancho){
		this.alto=alto;
		this.ancho=ancho;
	}
}

// CLASES Y SUB CLASES PARA HERENCIA

// clase (super clase)

class Deportista {
	constructor(nombre,apellido){
		this.nombre=nombre;
		this.apellido=apellido;
	}
}

let deportista1 = new Deportista("Nairo", "Quintana");

// Subclase

class Futbolista extends Deportista {
	constructor(nombre, apellido, goles){
		super(nombre,apellido);
		this.goles=goles;
	}
}

Futbolista.prototype.hablar = function(){
	console.log(`Hola soy ${this.nombre}, es un gusto`);
}

let futbolista1 = new Futbolista("James","Rodriguez",1);

console.log(futbolista1);