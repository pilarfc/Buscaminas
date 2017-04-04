var arregloImagenesLab = []; // Es el arreglo de imágenes de las bombas

function posicionarBombas () {
  var i = 0; // Variable del ciclo for
  var numerosNoRepetidosEnAleatorio;
  // Con esta variable lo que vamos a hacer es que nuestro math.random no repita ningun valor y siempre sean cuatro casillas.
  // Aquí es donde se va a almacenar ese cálculo

  for (i = 0; i <= 16; i++) {
     arregloImagenesLab[i] = "lab.png" // Aquí estamos haciendo un ciclo para ponerle las bombas a todas las celdas, un mismo contenido.
  }
  
  for (i=0; i < 4; i++) {
      do {
      numerosNoRepetidosEnAleatorio = Math.floor(Math.random()*16);
    } while  (arregloImagenesLab[numerosNoRepetidosEnAleatorio] != "lab.png")
  // En este do...while se lee, has el do mientras el numero de la operacion no sea igual a la misma posicion que tiene otro lab dentro del arreglo.
// Es decir, mientras en ese arreglo ese numero (posicion) que se eligió no sea igual a laboratoria, ponme una bomba.

      arregloImagenesLab[numerosNoRepetidosEnAleatorio] = "bomba.jpg"
      // El math nos da un numero aleatorio entre 0 y 1, al multiplicarlo por 16 es que obtenemos un numero entre 0 y 16, pero sin llegar nunca a 16.
      // Tampo queremos que sea cero, entonces utilizamos otro math anidado, que si nos da decimales, lo va a convertir.
    }
}

/* function volverAIniciar () {
  var i;

   for (i = 0; i < 16; i++) {
     document.getElementById(i).src = "chidas.jpg";
   }
}*/

function volverAIniciar() {
   location.reload();
}

function removerTabla () {
  var a = document.getElementById("tabla");
  a.remove(a.selectedIndex);

}

function clickEnImagen (imagen) { // Recibimos la imagen como parámetro
  imagen.src =  arregloImagenesLab[imagen.id]; // Aquí estamos diciendo que en todas las celdas debe de ir la imagen de la mina al hacer click
  // En nuestro HTML utilizamos el evento onload = posicionarBombas() para que cuando se refresque la página mande a llamar la función y las imágenes
  // Estamos utilizando el id que tiene cada imagen
    if (arregloImagenesLab[imagen.id] == "bomba.jpg") {
      alert ("Aquí hay una bomba, se terminó el juego :C");
      //document.getElementById("2").src = "chidas.jpg" Este método se puede usar para que el juego se reinicie solo al perder
    //  dejarDeContarClicks()
    removerTabla();
    }
}

/*$("table").click(function dejarDeContarClicks(event){
       event.stopPropagation();
   }); */
