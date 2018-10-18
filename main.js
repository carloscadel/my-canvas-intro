console.log('hola')
var canvas = document.getElementById('example');
var ctx = canvas.getContext('2d');


function degreesToRadians(degrees) {
    return degrees*Math.PI/180;
}

function drawPacman(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, degreesToRadians(320), degreesToRadians(40), true);
    ctx.lineTo(x, y);
    ctx.fill();
    ctx.closePath()
}


// for(var y = 20; y <= 180; y += 20){
//     drawPacman(50, y, 8);
// }

canvas.onclick = function(event){
    console.log(event)
    drawPacman(event.offsetX, event.offsetY, 10)
}


// ctx.beginPath()
// ctx.arc(50, 100, 50, 0, degreesToRadians(360), false)
// ctx.fill()

// ctx.beginPath()
// ctx.moveTo(10, 10)
// ctx.arcTo(10, 10, 90, 190, 50)
// ctx.stroke()
// ctx.closePath()


// ctx.fillRect(50, 100, 20, 20)
// ctx.clearRect(60, 110, 5, 5)

// ctx.beginPath()
// ctx.moveTo(10, 10)
// ctx.lineTo(90, 10)
// ctx.lineTo(10, 190)
// ctx.closePath()
// ctx.fill()