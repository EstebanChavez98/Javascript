console.log('Funcionando');

document.querySelector('#boton').addEventListener('click', texto);
let respuesta = document.querySelector('#respuesta');

function texto(){
    console.log('Diste un click');

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'archivo.txt', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log('Llego con exito');
            respuesta.innerHTML = this.responseText;
        }
    }
}