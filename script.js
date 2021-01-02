//script.js

var texto = document.getElementById("texto_espacios");
var boton = document.getElementById("boton_espacios");

var d = document.getElementById("dibujito");
var ANCHO = d.width;
var lienzo = d.getContext("2d");

boton.addEventListener("click", dibujoPorClick);

//console.log(lienzo); //test

//functions
function dibujarLinea(lineW, color, x0, y0, x1, y1){
  lienzo.beginPath();
    lienzo.lineWidth = lineW; // Set line width
    lienzo.strokeStyle = color;
    lienzo.moveTo( x0, y0);
    lienzo.lineTo( x1, y1);
    lienzo.stroke();
  lienzo.closePath();
}

function planoWhile(space, lineW, color, i0, j0, i1, j1){
  var i = 0;
  while ( i <= ANCHO ) {
    dibujarLinea( lineW, color,i0 ,j0 ,i1 , j1);
    
    switch (1) {
      case 1:
        i1 = i1 + space;
        j0 = j0 + space;
        i = i1;
        break;
      case 2:
        i1 = i1 + space;
        j1 = j1 + space;
        i = i1;
        break;
      default:
        //code block
    }

  }
}

function planoDoWhile(space, lineW, color, i0, j0, i1, j1){
  var i = 0;
  do {
    dibujarLinea( lineW, color,i0 ,j0 ,i1 , j1);
    
    switch (1) {
      case 1:
        i1 = i1 + space;
        j0 = j0 + space;
        i = i1;
        break;
      case 2:
        i1 = i1 + space;
        j1 = j1 + space;
        i = i1;
        break;
      default:
        //code block
    }
  } while ( i <= ANCHO ) 
}

function planoFor(space, lineW, color, i0, j0, i1, j1){

  for ( i = 0; i <= ANCHO;  ) {
    dibujarLinea( lineW, color,i0 ,j0 ,i1 , j1);

    switch (1) {
      case 1:
        i1 = i1 + space;
        j0 = j0 + space;
        i = i1; //count
        break;
      case 2:
        i1 = i1 + space;
        j1 = j1 + space;
        i = i1;
        break;
      default:
        //code block
    }
  }
}

function dibujoPorClick() {
  //Draw
  //console.log("test click");
  var nLineas = texto.value;

  var espacioL = ANCHO/nLineas

  dibujar(parseInt(espacioL));
}

//Draw function
function dibujar(espacioL) {
  lienzo.clearRect(0, 0, ANCHO, ANCHO);

  planoWhile(espacioL, 3,  "yellow", ANCHO, 0, 0, 0);
  planoWhile(espacioL, 2,  "lime", ANCHO, 0, 0, 0);
  planoDoWhile(espacioL, 1,  "silver", ANCHO, 0, 0, 0);

  planoFor(espacioL, 3,  "yellow", 0, 0, 0, ANCHO);
  planoFor(espacioL, 2,  "aqua", 0, 0, 0, ANCHO);
  planoFor(espacioL, 1,  "silver", 0, 0, 0, ANCHO);
}