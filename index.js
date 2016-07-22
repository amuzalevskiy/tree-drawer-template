window.onload = function() {
    cacheCanvasLink();
    attachClickHandler();
    drawTree();
};

var canvas;
var ctx;
function cacheCanvasLink() {
    canvas = document.getElementById('canvas');
    canvas.setAttribute('width', window.innerWidth);
    canvas.setAttribute('height', window.innerHeight);
    ctx = canvas.getContext("2d");
}

function attachClickHandler() {
    document.body.addEventListener('click', drawTree);
}

function drawLine(x1, y1, x2, y2, color, width) {
    var path = new Path2D();
    path.moveTo(x1, y1);
    path.lineTo(x2, y2);
    ctx.lineCap = 'round';
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.stroke(path);
}

function drawTree() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawLine(
        window.innerWidth / 2,
        window.innerHeight * 0.9,
        window.innerWidth / 2,
        window.innerHeight * 0.9 - 50,
        '#7D3F21',
        10
    )
}

function rotateVector(vector, angle) {
    var ca = Math.cos(angle);
    var sa = Math.sin(angle);
    return {
        x: ca * vector.x - sa * vector.y,
        y: sa * vector.x + ca * vector.y
    }
}

function multiplyVector(vector, coeff) {
    return {
        x: coeff * vector.x,
        y: coeff * vector.y
    }
}
