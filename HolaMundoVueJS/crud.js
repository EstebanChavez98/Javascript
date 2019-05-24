document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#appPacientes',
        data: {
            // Input nombre
            nombre: '',
            // Input edad
            edad: '',
            // Ver o no ver el formulario de actualizar
            formActualizar: false,
            // La posición de tu lista donde te gustaría actualizar 
            idActualizar: -1,
            // Input nombre dentro del formulario de actualizar
            nombreActualizar: '',
            // Input edad dentro del formulario de actualizar
            edadActualizar: '',
            // Lista de pacientes
            pacientes: [] 
        },
        methods: {
            crearPaciente: function () {
                // Anyadimos a nuestra lista
                this.pacientes.push({
                    id: + new Date(),
                    nombre: this.nombre,
                    edad: this.edad
                });
                // Vaciamos el formulario de añadir
                this.nombre = '';
                this.edad = '';
            },
            verFormActualizar: function (paciente_id) {
                // Antes de mostrar el formulario de actualizar, rellenamos sus campos
                this.idActualizar = paciente_id;
                this.nombreActualizar = this.pacientes[paciente_id].nombre;
                this.edadActualizar = this.pacientes[paciente_id].edad;
                // Mostramos el formulario
                this.formActualizar = true;
            },
            borrarPaciente: function (paciente_id) {
                // Borramos de la lista
                this.pacientes.splice(paciente_id, 1);
            },
            guardarActualizacion: function (paciente_id) {
                // Ocultamos nuestro formulario de actualizar
                this.formActualizar = false;
                // Actualizamos los datos
                this.pacientes[paciente_id].nombre = this.nombreActualizar;
                this.pacientes[paciente_id].edad = this.edadActualizar;
            }
        }
    });
});