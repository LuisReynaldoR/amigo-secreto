let lista = [];

function limpiarCaja(){
  document.getElementById("amigo").value = "";
}

function asignarTextoElemento(elemento, texto) {
  let listaHTML = document.getElementById(elemento);
  listaHTML.innerHTML = "<ul>" + texto.map(item => `<li>${item}</li>`).join("") + "</ul>";
}

function agregarAmigo(){
     let nuevoNombre = document.getElementById("amigo").value;
  if(nuevoNombre === ""){
    alert("Por favor ingresa un nombre");
  } else {
    lista.push(nuevoNombre);
    console.log(lista);
    asignarTextoElemento("listaAmigos", lista);
    limpiarCaja();
  }
}

function sortearAmigo(){
  if(lista.length === 0){
    alert("Por favor ingresa un nombre");
  } else{
    let sortear = Math.floor(Math.random()*lista.length);
    let amigo = document.getElementById("resultado");
    console.log(lista[sortear]);
    amigo.innerHTML = `El amigo secreto sorteado es: ${lista[sortear]}`;
    asignarTextoElemento("listaAmigos", []);
  }
}
