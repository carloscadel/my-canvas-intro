console.log('hola')
var canvas = document.getElementById('exampleCanvas');
var ctx = canvas.getContext('2d');


function degreesToRadians(degrees) {
    return degrees*Math.PI/180;
}

function drawPacman(x, y, radius, color='black') {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, degreesToRadians(320), degreesToRadians(40), true);
    ctx.lineTo(x, y);
    ctx.fill();
    ctx.closePath()
}

function drawGrid(size = 20, color = 'rgba(255,0,0,0.5)'){

    ctx.strokeStyle = color
    // var winHeight = window.innerHeight/80
    var fontSize = (5+0.3*size)

    for(var y = 0; y < canvas.height; y += size){
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
        ctx.font = '' + (fontSize) + 'px' + ' monospace'
        ctx.fillText(y, 0, y)

    }
    for(var x = 0; x < canvas.width; x += size){
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
        ctx.textAlign = 'center'
        ctx.font = '' + (fontSize) + 'px' + ' monospace'
        ctx.fillText(x, x, fontSize)

    }
}
drawGrid(100)


ctx.font = '50px monospace'
ctx.textAlign = 'center'
ctx.fillText('Pacman', 500, 100)

for(var y = 40; y <= 180; y += 20){
    drawPacman(50, y, 8, 'rgb('+(y+20)+', 255, 0)');
}



// canvas.onclick = function(event){
//     console.log(event)
//     drawPacman(event.offsetX, event.offsetY, 10)
// }

// drawing pacman on click
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