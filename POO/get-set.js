class Deportista {
	constructor(nombre,apellido){
		this.nombre=nombre;
		this.apellido=apellido;
	}
}

// Subclase
class Futbolista extends Deportista{
	constructor(nombre,apellido,goles){
		super(nombre,apellido);
		this.goles=goles;
	}
	get goles(){
		return this.goles;
	}
	set goles(nuevoGoles){
		this.goles=nuevoGoles;
	}
}