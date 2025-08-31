// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

    // Crear array para almacenar los nombres de los amigos
let amigos = [];
    // Agregar amigo a la lista
function agregarAmigo() {
    //  Capturar el valor del campo de entrada
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Definir la variable nombre

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

     // Mostrar los amigos en la lista
    mostrarAmigos();
}
    // Mostrar los amigos de la lista
     function mostrarAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');
    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo amigos y agregar elementos <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
    //Sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const nombreSorteado = amigos[indice];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${nombreSorteado}</li>`;
}