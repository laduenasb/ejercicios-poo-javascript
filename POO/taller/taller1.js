class Producto {
	constructor(nombre,precio,cantidadEnStock){
		this.nombre=nombre;
		this.precio=precio;
		this.cantidadEnStock=cantidadEnStock;
	}
	informacion(){
		console.log(`${this.nombre} tiene un precio de ${this.precio} y hay ${this.cantidadEnStock} articulos en stock`);
	}
}

class Computadoras extends Producto {
	constructor(nombre,precio,cantidadEnStock,marca){
		super(nombre,precio,cantidadEnStock);
		this.marca=marca;
	}
	informacion(){
		this.mensaje=`${this.nombre} es de la marca ${this.marca}, tiene un precio de ${this.precio} y hay ${this.cantidadEnStock} articulos en stock`;
	}
}

class Ebooks extends Producto {
	constructor(nombre,precio,cantidadEnStock,autor){
		super(nombre,precio,cantidadEnStock);
		this.autor=autor;
	}
	informacion(){
		this.mensaje=`${this.nombre} el autor es ${this.autor}, tiene un precio de ${this.precio} y hay ${this.cantidadEnStock} articulos en stock`;
	}
}

class Accesorios extends Producto {
	constructor(nombre,precio,cantidadEnStock){
		super(nombre,precio,cantidadEnStock);
		// this.autor=autor;
	}
	informacion(){
		this.mensaje=`${this.nombre} tiene un precio de ${this.precio} y hay ${this.cantidadEnStock} articulos en stock`;
	}
}

let computador1=new Computadoras("windows 11", 2000000,3,"Asus");
let libro1=new Ebooks("El principito", 45000, 5, "Antoine de Saint-Exupéry");
let accesorio1=new Accesorios("Audifonos",12000,6);

console.log(computador1);
computador1.informacion();
console.log(libro1);
libro1.informacion();
console.log(accesorio1);
accesorio1.informacion();

function mostrarInformacion1(){
	const resultado=computador1.mensaje;
	console.log(resultado);
	document.getElementById("producto").innerText=resultado;
	console.log(parrafo);
}

function mostrarInformacion2(){
	const resultado=libro1.mensaje;
	console.log(resultado);
	document.getElementById("producto").innerText=resultado;
	console.log(parrafo);
}

function mostrarInformacion3(){
	const resultado=accesorio1.mensaje;
	console.log(resultado);
	document.getElementById("producto").innerText=resultado;
	console.log(parrafo);
}
