class Animal{
    constructor(nombre, edad, sonido){
        this.nombre = nombre,
        this.edad = edad,
        this.sonido = sonido;
    }
    emitirSonido(){
        console.log(`El sonido del animal es ${this.sonido}`);
    }
}

class Perro extends Animal{
    constructor(nombre, edad, sonido, raza){
        super(nombre, edad, sonido);
        this.raza = raza;
    }
    emitirSonido(){
        console.log(`El sonido de los perros es ${this.sonido}`);
    }
}
class Gato extends Animal{
    constructor(nombre, edad, sonido, raza){
        super(nombre, edad, sonido);
        this.raza = raza;
    }
    emitirSonido(){
        console.log(`El sonido de los gatos es ${this.sonido}`);
    }
}
let Animal1 = new Animal("Lucinda", 2, "Muuu", "vaca");
let Animal2 = new Animal("Estrellita", 1, "Mehh", "oveja");
let Perro1 = new Perro("Copito", 3, "Guau", "perro");
let Perro2 = new Perro("Firulais", 1, "Guau", "perro");
let Gato1 = new Gato("Misi", 2, "Miau", "gato");
let Gato2 = new Gato("Michi", 7, "Miau", "gato");