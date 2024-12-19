// Con este constructor podemos crear objetos con los jugadores
function Player(nombre,imagen) {
    this.nombre = nombre;
    this.imagen = imagen;
}

// Creamos los jugadores
const Infernape = new Player("Infernape","./images/1.png");
const Mario = new Player("Mario","./images/2.png");
const Sonic = new Player("Sonic","./images/3.png");
const DarthVader = new Player("Darth Vader","./images/4.png");
const Frodo = new Player("Frodo","./images/5.png");
const Harry = new Player("Harry","./images/6.png");
const Luffy = new Player("Luffy","./images/7.png");
const Naruto = new Player("Naruto","./images/8.png");
const Goku = new Player("Goku","./images/9.png");
const Messi = new Player("Messi","./images/10.png");
const Dino = new Player("Dino","./images/11.png");
const Spiderman = new Player("Spiderman","./images/12.png");
const Batman = new Player("Batman","./images/13.png");
const Santa = new Player("Santa","./images/14.png");
const Curry = new Player("Curry","./images/151.png"); // La imagen de este jugador no se ve adrede(más adelante explico porqué). Para visualizar esta imagen simplemente hay que cambiar el nombre de la ruta de 151 a 15
const Nadal = new Player("Nadal","./images/16.png");

// Jugadores iniciales
const playersIni = [
    Infernape,
    Mario,
    Sonic,
    DarthVader,
    Frodo,
    Harry,
    Luffy,
    Naruto,
    Goku,
    Messi,
    Dino,
    Spiderman,
    Batman,
    Santa,
    Curry,
    Nadal
];
// Esto es para modificar el array de jugadores durante el sorteo
const players = [];
for (let i = 0; i < playersIni.length; i++) {
    players.push(playersIni[i]);
}

// Cuadros de los octavos (el nombre viene de div + 16 diferentes cuadros)
const div16osIni = [
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "d10",
    "d11",
    "d12",
    "d13",
    "d14",
    "d15",
    "d16"
];
// Esto es para modificar el array de octavos durante el sorteo
const div16os = [];
for (let i = 0; i < div16osIni.length; i++) {
    div16os.push(div16osIni[i]);
}

// Variables para el sorteo automático y el contador
let intervaloSorteo;
let intervaloCont;
let contador = 1;

// Función para hacer el sorteo automático, y llamamos a la función con la que sorteamos
function sorteoAutomatico() {
    intervaloSorteo = setInterval(sortear,2000);
}

// Función para sortear la posición de cada jugador en el cuadro
function sortear() {
    if (players.length!==div16os.length) {
        // Si tenemos distintos jugadores a cuadros nos salta un aviso
        alert("Faltan jugadores por añadir.")
    } else if (players.length===0 || div16os.length===0) {
        // Como vamos a ir eliminando los jugadores y cuadros, cuando nos hemos quedado sin o ya están todos asignados, nos avisa que el sorteo ha finalizado e inicializamos el vídeo, y paramos el intervalo del Sorteo
        clearInterval(intervaloSorteo);
        alert("Sorteo finalizado.");
        // Constante para el video
        const video = document.getElementById('video');
        video.style.display = 'block';
        video.play();
    } else {
            // Variables para ver en que posición del índice de los arrays estamos
            let indicePlayers;
            let indiceDiv16os;
        
            // Cogemos un índice aleatorio dentro de los arrays
            indicePlayers = Math.floor(Math.random()*players.length);
            indiceDiv16os = Math.floor(Math.random()*div16os.length);

            // Colocamos la imagen del jugador aleatorio en un cuadro aleatorio
            document.getElementById(div16os[indiceDiv16os]).src = players[indicePlayers].imagen;
            // Colocamos el nombre del jugador aleatorio en un cuadro aleatorio, este nombre aparece en el alt que usamos por si una imagen no nos carga.
            // Por ello he querido dejar algunas imágenes sin poder visualizarse (véase el html o la creación de jugadores), para que se vea con claridad este cambio
            document.getElementById(div16os[indiceDiv16os]).alt = players[indicePlayers].nombre;
            // Colocamos el nombre del jugador aleatorio en un cuadro aleatorio
            document.getElementById(div16os[indiceDiv16os]).title = players[indicePlayers].nombre;

            // Eliminamos el jugador y el cuadro de la lista de jugadores y cuadros
            players.splice(indicePlayers, 1);
            div16os.splice(indiceDiv16os, 1);
    }
}

// Función para tener un contador de segundos para saber la duración del torneo
function iniciarTorneo() {
    intervaloCont = setInterval(function() {
        document.getElementById('contador').innerHTML = contador++ + ' segundos';
    }, 1000);
}

// Función para resetear el torneo y los contadores; mejor resetearlo una vez finalizado el sorteo, si no puede dar problemas :(
function resetear() {
    // Resetamos los intervalos
    clearInterval(intervaloSorteo);
    clearInterval(intervaloCont);
    // Reseteamos el texto del contador de segundos
    contador = 1;
    document.getElementById('contador').innerHTML = 'Duración del torneo';
    // Reseteamos los cuadros
    for (let i = 0; i < div16osIni.length; i++) {
        document.getElementById(div16osIni[i]).src = "./images/default.png";
        document.getElementById(div16osIni[i]).alt = "Por definir";
        document.getElementById(div16osIni[i]).title = "Por definir";
    }
    // Reseteamos el array del cuadro
    for (let i = 0; i < div16osIni.length; i++) {
        div16os.push(div16osIni[i]);
    }
    // Reseteamos el array de jugadores
    for (let i = 0; i < playersIni.length; i++) {
        players.push(playersIni[i]);
    }
    // Eliminamos el vídeo
    video.style.display = 'none';
    video.stop();
}

