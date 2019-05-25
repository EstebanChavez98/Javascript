var arreglo = ['HTML', 15, true];
console.log(arreglo);
console.log(arreglo[0]);

var objeto = {
    nombre: 'HTML',
    duracion: 15,
    estado: true,
    capitulos: {
        nombre: 'Introduccion',
        videos: 20
    }
}
console.log(objeto);
console.log(objeto['nombre']);
console.log(objeto.nombre);//desplegar un atributo de un objeto

console.log(objeto.capitulos.nombre) //desplegar un atributo de un objeto como atributo dentro de un objeto

var arrayObjetos = [
    {
        nombre: 'HTML',
        estado: true
    },
    {
        nombre: 'CSS',
        estado: true
    },
    {
        nombre: 'JS',
        estado: false
    }
]
/*
console.log(arrayBoletos[0].nombre);
console.log(arrayBoletos[1].nombre);
console.log(arrayBoletos[2].nombre);*/
for(let indice of arrayObjetos){
    console.log(indice.nombre);
}