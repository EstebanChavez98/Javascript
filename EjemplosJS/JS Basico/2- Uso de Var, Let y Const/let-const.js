console.log('var, let y const');
/*
var edad = 55;
var edad = 60;

Inicializar var multiples veces no causa error de programa
Solo se sobre escribe el 60 sobre el 55
*/

let edad = 55;
edad = 60;
//Usar let, solo permite inicializar una sola vez a una variable
console.log(edad);

for(var i = 0; i <= 5;i++){
    console.log(i);
}
console.log(i);
//El despliege es> 0 1 2 3 4 5 6
//El 6 lo toma ya que la variable i fue inicializada y cuando la variable toma el valor de 6
//Ya no ejecuta el ciclo por la condicion, esto pasa 
let i = 50;
for(let i = 0; i <= 5;i++){
    console.log(i);
}
console.log(i);
//Usando let, la i solo existe dentro de ese ambiente, en este caso, en el for
//por lo que este console que esta fuera del ambiente, detecta el 50.

let numero = 60;
if(true){
    let numero = 55;
    console.log('Dentro del if ' + numero);   //desplegara el 55 que se encuentra dentro del ambiente de if
}
console.log(numero); //<--Desplegara el 60 ya que este console esta a nivel global

//Const = Solo se pueden declarar una vez y no se pueden sobreescribir
const num = 44; //Las constantes deben de tener un valor inicializad
console.log(num);

///se pueden agregando propiedades a aray constantes usando Push
const numeros = [55,60,30];
numeros.push(10);
console.log(numeros);



