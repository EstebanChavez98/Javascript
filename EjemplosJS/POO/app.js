const Pelicula = {
    nombre: 'Harry',
    id: 01,
    reproducir(){
        return `Reproduciendo pelcula... ${this.nombre}`;
    }
}//Objeto literal


class Pelicula{
    constructor(nombre, id){
        this.nombre = nombre;
        this.id = id;
    }
    reproducir(){
        return `Reproduciendo pelicula ${this.nombre}` ;
    }
}

class Serie extends Pelicula{
    constructor(nombre, id, cap){
        super(nombre, id);
        this.cap = cap;
    }
    reproducirCapitulo(){
        return `Reproducido capitulo ${this.cap}...${this.nombre}`
    }
}

const peliculaUno = new Pelicula('Harry', 1);
const peliculaDos = new Pelicula('Spider', 2)
const serieUno = new Serie('Dexter', 3, 55)
console.log(peliculaUno.reproducir());
console.log(peliculaDos.reproducir());
console.log(serieUno.reproducirCapitulo());