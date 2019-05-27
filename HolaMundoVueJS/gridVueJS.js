var demo = new Vue({
    el: '#main',
    data: {
        // The layout mode, possible values are "grid" or "list".
        layout: 'grid',

        articles: [{
            "title": "Cómo crear un módulo en Swift",
            "url": "http://programacion.net/articulos/como_crear_un_modulo_en_swift_1358",
            "image": {
                "large": "http://programacion.net/files/article/20160314050356_swift-big.jpg",
                "small": "http://programacion.net/files/article/20160314050356_swift.jpg"
            }
        },
        {
            "title": "Introducción a Web MIDI",
            "url": "http://programacion.net/articulos/introduccion_a_web_midi_1357",
            "image": {
                "large": "http://programacion.net/files/article/20160313020301_midi-big.jpg",
                "small": "http://programacion.net/files/article/20160313020301_midi.jpg"
            }
        },
        {
            "title": "Gestiona tu FTP desde PHP",
            "url": "http://programacion.net/articulos/gestiona_tu_ftp_desde_php_1356",
            "image": {
                "large": "http://programacion.net/files/article/20160311020354_dirftp-big.jpg",
                "small": "http://programacion.net/files/article/20160311020354_dirftp.jpg"
            }
        }]

    }
});