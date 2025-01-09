let color = "purple"; //definimos el color con el que vamos a empezar
let turno = "X"; //definimos el turno con el que empezaremos, es decir X u O. En este caso empezamos con X

//función que cambia el color de las casillas del tablero al hacer click
function cambiarColor(element) {
    element.style.backgroundColor = color; 
    element.innerHTML = turno;

    //un click morado, un click rosa y así sucesivamente
    if (color === "purple") {
        color = "pink";
        turno = "O"; //cambia el simbolo a O
    } else {
        color = "purple";
        turno = "X"; //cambia el simbolo a X
    }

    if (turno === "O") { //si el turno es O, juega la máquina
        setTimeout(maquina, 200); //el tiempo que tarda la máquina en responder
    }
}

function maquina() {
    const botones = document.querySelectorAll("#tablero button");
    let casillaElegida = null;

    //busca una casilla vacía
    for (let i = 0; i < botones.length; i++) {
        if (botones[i].innerHTML === "") {
            //elige una casilla vacía
            if (Math.random() < 1 / (botones.length - i)) { //con esto haremos que seleccione una de las casillas vacías al azar
                casillaElegida = botones[i];
            }
        }
    }

    //si hay casillas vacías la máquina pone O (y por lo tanto rosa), en una aleatoria
    if (casillaElegida) {
        casillaElegida.style.backgroundColor = "pink";
        casillaElegida.innerHTML = "O";

        //el siguiente turno es morado, X
        color = "purple";
        turno = "X";
    }
}

//función de resetear; es decir, cuando le das al botón de reiniciar desaparecen todos los colores de las casillas
function reset() {
    document.querySelectorAll("#tablero button").forEach(element => {
        element.innerHTML = "";
        element.style.backgroundColor = "";
    });
    color = "purple"; //esto es para que vuelva a comenzar por morado
    turno = "X"; //vuelve a comenzar por X
}

//seleccionamos los botones y los recorremos con el foreach, para que cuando hagamos click cambie el color
document.querySelectorAll("#tablero button").forEach(button => {
    button.addEventListener("click", function() {
        cambiarColor(button);
    });
});

//cuando se haga click en el botón de reinicio, se resetea y se vuelve a empezar
document.getElementById("resetButton").addEventListener("click", reset);