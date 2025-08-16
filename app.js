// Array para guardar los nombres que el usuario ingrese

let amigo = [];
// Función para agregar un nombre al array  
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Obtiene el campo de entrada por su id
    const nombre = input.value.trim(); // quita espacios al inicio y al final

    if (nombre === "") { // Verifica que no esté vacío
        alert("Por favor, ingresa un nombre válido.");
        return;
        }
    amigo.push(nombre); // Agrega el nombre al array
    mostarLista(); // Muestra la lista actualizada
    input.value = ""; // Limpia el campo de entrada
        
}

function mostarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista actual
    
    // forEach recorre el array amigo y crea un elemento de lista para cada nombre
    amigo.forEach((nombre, index) => {
        const item = document.createElement("li"); // crea un nuevo elemento de lista
        item.textContent = `${index + 1}. ${nombre}`; // Asigna el texto del nombre
        lista.appendChild(item); // Agrega el elemento a la lista
    });

}

function sortearAmigo() {
    if (amigo.length === 0) { // Si la lista está vacía manda un mensaje al usuario
        alert("No hay amigos para sortear.");
        return;
    }
    // Selecciona un amigo aleatorio del array
    // Math.random() genera un número aleatorio entre 0 y 1, lo multiplicamos por la longitud del array para obtener un índice válido
    // Math.floor() redondea hacia abajo para obtener un número entero, para evitar errores al acceder al array
    const indiceAleatorio = Math.floor(Math.random() * amigo.length);
    // Obtiene el nombre del amigo secreto usando el índice aleatorio 
    const amigoSecreto = amigo[indiceAleatorio]; // Obtiene el nombre del amigo secreto

    // Muestra el nombre del amigo secreto en el elemento con id "resultado"
    const resultado = document.getElementById("resultado");
    resultado.textContent = `El amigo secreto es: ${amigoSecreto}`; // Muestra el nombre del amigo secreto
}
