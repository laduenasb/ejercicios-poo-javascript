// Creo una funcion constructora

function Libro(autor, titulo, catPaginas){
	this.autor=autor;
	this.titulo=titulo;
	this.catPaginas=catPaginas;
}

let libro1 = new Libro("Stephen King", "Cementerio de animales",500);


// Prototype tambien se usa para añadir propiedades nuevas al constructor

// Añadir un nuevo metodo al prototipo del constructor original

Libro.prototype.abrirLibro = function(){
	console.log(this.titulo+" ha sido abierto");
}
console.log(Libro);
libro1.abrirLibro();