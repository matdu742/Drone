/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    document.getElementById('reconnect-btn').addEventListener('click', function() {
        fetch('/drone/reconnect')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    // Gérer la réussite de la reconnexion
                    checkDroneConnection();
                } else {
                    // Gérer l'échec de la reconnexion
                    alert('Échec de la reconnexion: ' + data.message);
                }
            });
    });
    
    function checkDroneConnection() {
        fetch('/drone/status')
            .then(response => response.json())
            .then(data => {
                if (data.connected) {
                    // Activer les boutons de contrôle
                } else {
                    // Désactiver les boutons de contrôle
                }
            });
    }
    
    setInterval(checkDroneConnection, 5000); // Toutes les 5 secondes
    
});

document.addEventListener('keydown', function(event) {
    const keyMap = {
        'z': 'k90',  // Z key
        'q': 'k81',  // Q key
        's': 'k83',  // S key
        'd': 'k68',  // D key
        't': 'k84',  // T key
        'l': 'k76',  // L key
        'r': 'k82',  // R key
        'e': 'k69',  // E key
        'ArrowUp': 'k01',    // Up arrow
        'ArrowLeft': 'k02',  // Left arrow
        'ArrowDown': 'k03',  // Down arrow
        'ArrowRight': 'k04', // Right arrow
    };

    let keyID;
    if (event.key.startsWith('Arrow')) {
        keyID = keyMap[event.key];
    } else {
        keyID = keyMap[event.key.toLowerCase()];
    }

    if (keyID) {
        const keyElement = document.getElementById(keyID);
        if (keyElement) {
            keyElement.classList.add('active');
        }
    }
});

document.addEventListener('keyup', function(event) {
    const keyMap = {
        'z': 'k90',
        'q': 'k81',
        's': 'k83',
        'd': 'k68',
        't': 'k84',
        'l': 'k76',
        'r': 'k82',
        'e': 'k69',
        'ArrowUp': 'k01',
        'ArrowLeft': 'k02',
        'ArrowDown': 'k03',
        'ArrowRight': 'k04',
    };

    let keyID;
    if (event.key.startsWith('Arrow')) {
        keyID = keyMap[event.key];
    } else {
        keyID = keyMap[event.key.toLowerCase()];
    }

    if (keyID) {
        const keyElement = document.getElementById(keyID);
        if (keyElement) {
            keyElement.classList.remove('active');
        }
    }
});