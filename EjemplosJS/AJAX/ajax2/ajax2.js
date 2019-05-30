//console.log('correcto');

document.querySelector('#boton').addEventListener('click', traerDatos());

function traerDatos(){
    //console.log('dentro de la funcion');
    const xttp = new XMLHttpRequest();

    xttp.open('GET', 'catalogo.json', true);
    xttp.send();
    xttp.onreadystatechange = function(){
        if(this.readyState == 4&& this.status == 200){
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
            res.innerHTML = '';
            for(let item of datos){
                //console.log(item.ti)
                res.innerHTML +=`
                    <tr>
                        <th>${item.titulo}</th>
                        <th>${item.artista}</th>
                    </tr>
                `
            }
        }
    }
}