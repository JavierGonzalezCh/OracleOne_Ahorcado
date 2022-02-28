
const canvas = document.querySelector(".contenedor1");
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'brown';
ctx.fillRect(0, 280, 600, 5);

var fallos = 0

const dibujoAhorcado = () =>{ /* Muestra una nueva parte del dibujo segun la cantidad de fallos */
    fallos++
    if (fallos >= 1) {
        ctx.fillStyle = 'chocolate';
        ctx.fillRect(175, 20, 50, 260);
        ctx.fillRect(175, 20, 200, 15);
        ctx.fillStyle = 'goldenrod';
        ctx.fillRect(355, 20, 3, 40);
    } if (fallos >= 2) {
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(357, 80, 20, 0, 2*Math.PI)
        ctx.stroke();
    } if (fallos >= 3) {
        ctx.beginPath();
        ctx.moveTo(357,100)
        ctx.lineTo(357,200)
        ctx.stroke();
    } if (fallos >= 4) {
        ctx.beginPath();
        ctx.moveTo(357,130);
        ctx.lineTo(387,100);
        ctx.moveTo(357,130);
        ctx.lineTo(327,100);
        ctx.stroke();
    } if (fallos >= 5) {
        ctx.beginPath();
        ctx.moveTo(357,200);
        ctx.lineTo(387,250);
        ctx.moveTo(357,200);
        ctx.lineTo(327,250);
        ctx.stroke();
    } if (fallos >= 6) {
        ctx.beginPath();
        ctx.moveTo(348,70);
        ctx.lineTo(352,80);
        ctx.moveTo(348,80);
        ctx.lineTo(352,70);
        
        ctx.moveTo(362,70);
        ctx.lineTo(366,80);
        ctx.moveTo(362,80);
        ctx.lineTo(366,70);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(357, 92, 5, Math.PI, 2*Math.PI)
        ctx.stroke();
    }
}








