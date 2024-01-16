// Creo una funcion constructora

function Perro(nombre,edad) {
	this.patas=4;
	this.ladrar=function(){
		console.log("Guau");
	};
	this.nombre=nombre;
	this.edad=edad;
}

// Crea instancias a partir del constructor

let lucy = new Perro("Lucy",5);
let molly = new Perro("Molly",1);

// Creo una funcion constructora opc 2

function Empleados(nombre,apellido,cargo,edad){
	this.nombre=nombre;
	this.apellido=apellido;
	this.cargo=cargo;
	this.edad=edad;
	this.presentarse=function(){
		console.log(`Mi nombre es ${this.nombre} ${this.apellido} trabajo como ${this.cargo} y tengo ${this.edad} años`);
	};
}

let empleado1=new Empleados("Felipe","Diaz","desarrollador",23);
console.log(empleado1);