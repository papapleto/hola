//2016_07_25
//funciona con p5.js
//es una elips que rebota contra las paredes

//declaracion de variables globales para lograr movimiento

var posX;
var posY;
var step;
var direction;

//declaracion de variables globales de como dibujar el circulo
var diametro;
var factorCrash;
//Setup() es una funcion que permite definir las condiciones iniciales
//se ejecua al ppio de los tiempos y solo una vez

function setup() {
  //creamos un lienzo a pantalla completa
  //createCanvas (dimHor, DimVer);
  createCanvas(windowWidth, windowHeight);

  //asignar valores iniciales a las variables


  posY = height / 2;
  step = 20;
  direction = 1;

  diametro = 100
  posX = diametro / 2
  factorCrash = 1
}

function draw() {
  background(0, 255, 0);

  //dibujar elipse

  //ellipse(posX, PosY, width, height);
  ellipse(posX, posY, factorCrash * diametro, diametro);


  //moviendola
  posX = posX + direction * step;

  //detectar cuando pega contra el borde
  //y hacer que se detenga y se achate

  if (posX > width - diametro / 2) {
    //el factorCrash es un porcentaje de achatamiento
    //simula qu la pelota se estrella contra el borde 
    //y se achata
    //depende de la posicion actual de la elipse, s diametro y el ancho del lienzo
    factorCrash = (width - posX) / (diametro / 2);

  } else if (posX < diametro / 2) {
    factorCrash = posX / (diametro / 2);
  } else {
    factorCrash = 1
  }

  //detectar donde esta la elipse para cambiar
  //la direccion de movimiento y hacer que rebote en los bordes
  if (posX > width || posX < 0) {
    direction = direction * -1;
    fill(random(255), random(122), random(233))
  }


}

//funcion para definir condiciones iniciales de la elipse