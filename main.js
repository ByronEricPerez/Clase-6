class Ropa{
    constructor( categoria , talle , color , genero){

        this.categoria = categoria;
        this.talle = talle;
        this.color = color;
        this.genero = genero;
    
    
    }




}

let arregloRopa = [];

for( let i = 0 ; i < 2 ; i++){

    let categoria = prompt("Que tipo de prenda es");
    let talle = prompt("Cual es el talle de la prenda");
    let color = prompt("Cual es el color de la prenda");
    let genero = prompt("Genero emenino o masculino");


    arregloRopa.push( new Ropa( categoria , talle , color , genero ));


}

console.log( arregloRopa );

/* for( let Ropa of arregloRopa){

    console.log("Tipo de ropa "+ Ropa.categoria)
    console.log("Tipo de ropa "+ Ropa.talle)
    console.log("Tipo de ropa "+ Ropa.color)
    console.log("Tipo de ropa "+ Ropa.genero)
} */
