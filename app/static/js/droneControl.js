let keysHeld = {};

document.addEventListener('keydown', function(event) {
    if (!keysHeld[event.key]) {
        keysHeld[event.key] = true;

        switch (event.key) {
            case 't':
                sendCommand('takeoff');
                break;
            case 'l':
                sendCommand('land');
                break;
            // Commandes avec maintien continu
            case 'z':
                sendCommand('up');
                break;
            case 's':
                sendCommand('down');
                break;
            case 'q':
                sendCommand('counter_clockwise');
                break;
            case 'd':
                sendCommand('clockwise');
                break;
            case 'ArrowUp':
                sendCommand('forward');
                break;
            case 'ArrowDown':
                sendCommand('back');
                break;
            case 'ArrowLeft':
                sendCommand('left');
                break;
            case 'ArrowRight':
                sendCommand('right');
                break;
        }
    }
});

document.addEventListener('keyup', function(event) {
    if (keysHeld[event.key]) {
        keysHeld[event.key] = false;
        // Arrêter le mouvement continu lors du relâchement de la touche
        switch (event.key) {
            case 'z':
                sendCommand('stop');
                break;
            case 's':
                sendCommand('stop');
                break;
            case 'q':
                sendCommand('stop');
                break;
            case 'd':
                sendCommand('stop');
                break;
            case 'ArrowUp':
                sendCommand('stop');
                break;
            case 'ArrowDown':
                sendCommand('stop');
                break;
            case 'ArrowLeft':
                sendCommand('stop');
                break;
            case 'ArrowRight':
                sendCommand('stop');
                break;
        }
    }
});

function sendCommand(command) {
    fetch(`/command/${command}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Erreur:', error));
}



