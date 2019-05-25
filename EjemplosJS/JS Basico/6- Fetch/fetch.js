var contenido = document.querySelector('#contenido');
        function Traer(){
            fetch('texto.txt')
            .then(data => data.text()) // Transforma el archivo
            .then(data => {
                console.log(data);
                contenido.innerHTML = `${data}`
            })
        }