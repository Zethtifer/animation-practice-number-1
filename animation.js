/*
console.log('02. Eventos con renderizado.')
// 0. Definición de constantes a usar
// NONE

// 1. Referencia al <canvas> en HTML
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 2. Definir resolución del canvas y hacerlo "responsivo" (que la resolución coincida con el elemento de HTML)
var canvasResolution = {};

function updateCanvasResolution() {
    var canvasDimensions = canvas.getBoundingClientRect();
    console.log('canvasDimensions:', canvasDimensions);
    
    
    canvasResolution.width = canvasDimensions.width;
    canvasResolution.height = canvasDimensions.height;

    canvas.width = canvasResolution.width;
    canvas.height = canvasResolution.height;
}

updateCanvasResolution();

// 2.1 Crear "event listener" para escuchar cuando la ventana cambie de tamaño.
window.addEventListener('resize', updateCanvasResolution);



// 3. La imagen – Definir la función de dibujo que se va a ejecutar cada vez que se mueva el mouse
function imageDrawing(x,y) {
    // 3.1 Analisis de la imagen
    // 3.1.1 Mitad fondo negro (#161616) y mitad fondo blanco (#f3f0ee), dos circulos grandes de 180º (a.k.a medios circulos), y desde el centro son 20 circulos (pura línea) que van aumentando su tamaño (del centro para afuera), misma idea de colores invertidos.

    // 3.2 Fondo (primera mitad)
    // 3.2.1 Rectangulo - Definir el inicio del trazo
    ctx.beginPath();

    // 3.2.2 Definir los estilos
    ctx.fillStyle = '#161616';

    // 3.2.3 Especificar la figura
    // ctx.rect(x,y,width,lenght);
    ctx.rect(600, 0, 400, 250); 

    // 3.2.4 Dibujar relleno o contorno
    ctx.fill();

    // 3.3 Circulo grande
    // 3.3.1 Definir Inicio del trazo
    ctx.beginPath();

    // 3.3.2 Definir los estilos
    ctx.strokeStyle = '#F3F0EE';
    ctx.fillStyle = '#F3F0EE';

    // 3.3.3 Especificar la figura.
    // ctx.ellipse(x,y,radiusX,radiusY,rotation,startAngle,endAngle);
    ctx.ellipse(800, 250, 135, 135, 0, Math.PI, Math.PI*2);

    // 3.3.4 Dibujar relleno o contorno
    ctx.stroke();
    ctx.fill();

    // 3.4. Circulos chicos (pt1)
    // 3.4.1 Definir la función para los circulos
    function dibujarCirculosNegros(x, y, radius, startAngle, endAngle) {
        // 3.4.1.1 Definir el inicio del trazo
        ctx.beginPath();
        
        // 3.4.1.2 Definir los estilos
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.strokeStyle = '#161616';
        ctx.lineWidth = 2;

        // 3.4.1.3 Dibujar el circulo
        ctx.stroke();
    }

    // 3.4.2 Dibujar los multiples circulos con un patrón
    let centroX = 800;
    let centroY = 250;
    let radioInicial = 2.5;


    for (let j = 0; j < 20; j++) {
        dibujarCirculosNegros(centroX, centroY, radioInicial, Math.PI, Math.PI*2);
        
        radioInicial += 4;
    }

    // 3.5 Fondo (segunda mitad)
    // 3.5.1 Rectangulo - Definir el inicio del trazo
    ctx.beginPath();

    // 3.5.2 Definir los estilos
    ctx.fillStyle = '#F3F0EE';

    // 3.5.3 Especificar la figura
    // ctx.rect(x,y,width,lenght);
    ctx.rect(600, 250, 400, 250); 

    // 3.5.4 Dibujar relleno o contorno
    ctx.fill();

    // 3.6 Circulo grande
    // 3.6.1 Definir Inicio del trazo
    ctx.beginPath();

    // 3.6.2 Definir los estilos
    ctx.strokeStyle = '#161616';
    ctx.fillStyle = '#161616';

    // 3.6.3 Especificar la figura.
    // 3tx.ellipse(x,y,radiusX,radiusY,rotation,startAngle,endAngle);
    ctx.ellipse(800, 250, 135, 135, 0, 0, Math.PI);

    // 3.6.4 Dibujar relleno o contorno
    ctx.stroke();
    ctx.fill();

    // 3.7. Circulos chicos (pt1)
    // 3.7.1 Definir la función para los circulos
    function dibujarCirculosBlancos(x, y, radius, startAngle, endAngle) {
        // 3.4.1.1 Definir el inicio del trazo
        ctx.beginPath();
        
        // 3.4.1.2 Definir los estilos
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.strokeStyle = '#F3F0EE';
        ctx.lineWidth = 2;

        // 3.4.1.3 Dibujar el circulo
        ctx.stroke();
    }

    // 3.7.2 Dibujar los multiples circulos con un patrón
    let centreX = 800;
    let centreY = 250;
    let radiusInicial = 2.5;


    for (let k = 0; k < 20; k++) {
        dibujarCirculosBlancos(centreX, centreY, radiusInicial, 0, Math.PI);
        
        radiusInicial += 4;
    }
}

// 4. Render de la imagen para probar
imageDrawing(canvas.width / 2, canvas.height /2);

// 5. Agregar otro "event listener" para volver a dibujar la imagen al cambiar de tamaño de la ventana porque al modificar la resolución el canvas se limpia automáticamente y no lo podemos prevenir.
window.addEventListener('resize', () => {
    imageDrawing(canvas.width / 2, canvas.height / 2);
});

// 6. Ahora, usamos "event listeners" para modificar el render de la imagen

// 6.1 Cambio de posición al mouse move
window.addEventListener('mousemove', (eventData) => {
    console.log(eventData);

    // Limpiar el canvas antes de cada dibujo
    // ctx.clearRect(x, y, canvas.width, canvas.height);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    imageDrawing(eventData.x, eventData.Y);
});

// 6.2 Renderizar al click, tomando como "centro" la posicón del mouse en ese momento
// window.addEventListener('mousedown', (eventData) => {
//     console.log(eventData);
//     circlesDrawing(eventData.x, eventData.y);
// }); */


// esto con ayuda de Chat vv

console.log('02. Eventos con renderizado.');

// 1. Obtener el canvas y su contexto
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 2. Ajustar la resolución del canvas
function updateCanvasResolution() {
    const canvasDimensions = canvas.getBoundingClientRect();
    canvas.width = canvasDimensions.width;
    canvas.height = canvasDimensions.height;
}

// Llamar a la función para definir la resolución inicial
updateCanvasResolution();
window.addEventListener('resize', updateCanvasResolution);

// 3. Mantener la función original pero haciendo que la imagen se desplace
function imageDrawing(offsetX, offsetY) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas antes de redibujar

    let x = 600 + offsetX - canvas.width / 2;
    let y = 250 + offsetY - canvas.height / 2;

    // Fondo (mitad superior - negro)
    ctx.beginPath();
    ctx.fillStyle = '#161616';
    ctx.rect(x, y - 250, 400, 250);
    ctx.fill();

    // Círculo grande superior (blanco)
    ctx.beginPath();
    ctx.fillStyle = '#F3F0EE';
    ctx.strokeStyle = '#F3F0EE';
    ctx.ellipse(x + 200, y, 135, 135, 0, Math.PI, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Círculos concéntricos negros
    for (let j = 0, radio = 2.5; j < 20; j++, radio += 4) {
        ctx.beginPath();
        ctx.arc(x + 200, y, radio, Math.PI, Math.PI * 2);
        ctx.strokeStyle = '#161616';
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    // Fondo (mitad inferior - blanco)
    ctx.beginPath();
    ctx.fillStyle = '#F3F0EE';
    ctx.rect(x, y, 400, 250);
    ctx.fill();

    // Círculo grande inferior (negro)
    ctx.beginPath();
    ctx.fillStyle = '#161616';
    ctx.strokeStyle = '#161616';
    ctx.ellipse(x + 200, y, 135, 135, 0, 0, Math.PI);
    ctx.fill();
    ctx.stroke();

    // Círculos concéntricos blancos
    for (let k = 0, radio = 2.5; k < 20; k++, radio += 4) {
        ctx.beginPath();
        ctx.arc(x + 200, y, radio, 0, Math.PI);
        ctx.strokeStyle = '#F3F0EE';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

// 4. Render inicial en el centro del canvas
imageDrawing(canvas.width / 2, canvas.height / 2);

// 5. Mover la imagen con el mouse dentro del canvas
canvas.addEventListener('mousemove', (event) => {
    imageDrawing(event.offsetX, event.offsetY);
});
