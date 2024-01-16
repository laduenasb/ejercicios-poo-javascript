function Vehiculo(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}

Vehiculo.prototype.informacion = function(){
    console.log(`El vehiculo es de marca ${this.marca} y el modelo ${this.modelo}`);
}

let vehiculo1 = new Vehiculo("Nissan", 1989);
let vehiculo2 = new Vehiculo("BMW", 2024);