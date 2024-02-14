"use strict";

function registerHandlers() {

    // When function is called and style is B, change to A //
    function styleAClick(event) {
        const link = document.getElementById(styleSheet);
        link.setAttribute('href', 'styleA.css');
        // We must prevent default so the page does not reload //
        event.preventDefault();
    }
    // When function is called and style is A, change to B //
    function styleBClick(event) {
        const link = document.querySelector('link[rel="stylesheet"]');
        link.setAttribute('href', 'styleB.css');
        // We must prevent default so the page does not reload // 
        event.preventDefault();
    }
    // set up listeners to call functions when click is deteceted //
    document.getElementById("styleA").addEventListener("click", styleAClick);
    document.getElementById("styleB").addEventListener("click", styleBClick);
}

document.addEventListener("DOMContentLoaded", registerHandlers);