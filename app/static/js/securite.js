var canvas = document.getElementById('monCanvas');
var context = canvas.getContext('2d');
var radioCarre = document.getElementById('radioCarre');
var radioCercle = document.getElementById('radioCercle');
var tailleInfo = document.getElementById('tailleInfo');
var isDrawing = false;
var startX, startY;
var dpi = 96; // Valeur DPI standard; vous pouvez permettre aux utilisateurs de la modifier

function pixelsToCm(pixels) {
    return pixels / dpi * 2.54;
}

function resetCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    tailleInfo.textContent = '';
}

canvas.addEventListener('mousedown', function(e) {
    isDrawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
});

canvas.addEventListener('mousemove', function(e) {
    if (isDrawing === true) {
        drawShape(e.offsetX, e.offsetY);
    }
});

canvas.addEventListener('mouseup', function(e) {
    if (isDrawing === true) {
        drawShape(e.offsetX, e.offsetY);
        isDrawing = false;
    }
});

function drawShape(x, y) {
    var width = x - startX;
    var height = y - startY;
    var size = Math.min(Math.abs(width), Math.abs(height));

    if (width < 0) startX = x;
    if (height < 0) startY = y;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = 'black';

    if (radioCarre.checked) {
        context.strokeRect(startX, startY, size, size);
        var tailleCm = pixelsToCm(size).toFixed(2);
        tailleInfo.textContent = 'Taille du côté du carré : ' + tailleCm + ' cm';
    } else if (radioCercle.checked) {
        var radius = size / 2;
        var centerX = startX + radius;
        var centerY = startY + radius;
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        context.stroke();
        var diametreCm = pixelsToCm(2 * radius).toFixed(2);
        tailleInfo.textContent = 'Diamètre du cercle : ' + diametreCm  + ' cm';
    }
}

