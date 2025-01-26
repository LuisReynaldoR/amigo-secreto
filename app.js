// Crea la variable que va a contener la lista de amigos
let listaAmigos = [];

/* Crea la funcion "agregarAmigo" señalada en el index 
   para agregar un nuevo nombre al momento de presionar 
   el boton "Añadir" 
*/
function agregarAmigo(){
  /* Asigna la variable en la cual se va almacenar un nuevo nombre, 
     toma el valor de entrada con el id "amigo" señalado en el index,
     y le asigna el valor escrito con ".value"
  */
  let nuevoNombre = document.getElementById("amigo").value;
  /* Si se escribio un nombre, se agrega a la lista de amigos
     y se manda a llamar a la funcion limpiar caja
  */
  if(nuevoNombre != ""){
    listaAmigos.push(nuevoNombre);
    console.log(listaAmigos);
    limpiarCaja();
    // Si no se escribio un nombre se muestra un mensaje de alerta
  } else{
    alert("Por favor ingresa un nombre");
  }
}

// Funcion para limpiar la caja de texto
function limpiarCaja(){
  let valorCaja = document.getElementById("amigo");
  valorCaja.value = "";
}

