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
console.log(i)
//El despliege es> 0 1 2 3 4 5 6
//El 6 lo toma ya que la variable i fue inicializada y cuando la variable toma el valor de 6
//Ya no ejecuta el ciclo por la condicion, esto pasa 
