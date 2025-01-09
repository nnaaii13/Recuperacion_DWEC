let color = "purple"; //definimos el color con el que vamos a empezar

//función que cambia el color de las casillas del tablero al hacer click
function cambiarColor(element) {
    element.style.backgroundColor = color; 

    //un click morado, un click rosa y así sucesivamente
    if (color === "purple") {
        color = "pink";
    } else {
        color = "purple";
    }
}

//función de resetear; es decir, cuando le das al botón de reiniciar desaparecen todos los colores de las casillas
function reset() {
    document.querySelectorAll("#tablero button").forEach(element => {
        element.innerHTML = "";
        element.style.backgroundColor = "";
    });
    color = "purple"; //esto es para que vuelva a comenzar por morado
}

//seleccionamos los botones y los recorremos con el foreach, para que cuando hagamos click cambie el color
document.querySelectorAll("#tablero button").forEach(button => {
    button.addEventListener("click", function() {
        cambiarColor(button);
    });
});

//cuando se haga click en el botón de reinicio, se resetea y se vuelve a empezar
document.getElementById("resetButton").addEventListener("click", reset);