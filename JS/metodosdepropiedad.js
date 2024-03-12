//metodos de propiedad, para tener sintaxis mas del metodo pero son funciones

const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo Canción con el ID: ${id}`)
    },
    pausar: function(){
        console.log(`Pausando...`)
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    },+
}


reproductor.borrarCancion = function(id) {
    console.log(`Eliminando La Cancion: ${id}`)
}


reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy Metal');