let perro1 = {
	nombre: "Lucy",
	color: "Blanco",
	edad: 4,
	ladrar() {
		console.log("Guau");
	},
	saludar(){
		console.log("Hola me llamo" + this.nombre);
	}
};


// Creo un objeto con sus atributos y metodos

let perro2 = {
	nombre: "Molly",
	color: "Cafe",
	edad: 1,
	irAlBaño() {
		console.log("piss");
	}
};

// Agrego una funcion que modifique la propiedad (edad)

function cambiarEdad() {
	perro1.edad += 1;
}

perro1["color"] = "negro";

console.log(perro1.edad);
cambiarEdad();
console.log(perro1.edad);
console.log(perro1["color"]);