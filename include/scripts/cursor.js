const cursor = document.querySelector('.custom-cursor');
let mouseX = 0;
let mouseY = 0;
let lastMouseX = 0;
let lastMouseY = 0;
let cursorX = 0;
let cursorY = 0;
const delay = 0.1;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Cálculo de velocidad para el efecto de gota
    let speedX = Math.abs(mouseX - lastMouseX);
    let speedY = Math.abs(mouseY - lastMouseY);


    if (speedX > 20 || speedY > 20) {
        cursor.classList.add('drop-effect');
    } else {
        cursor.classList.remove('drop-effect');
    }

    const hoveredElement = document.elementFromPoint(mouseX, mouseY);
    if (hoveredElement && (hoveredElement.tagName === 'A' 
        || hoveredElement.closest('.certificates-column'))
        || hoveredElement && hoveredElement.tagName === 'BUTTON'
        || hoveredElement.closest('.home-col-row3'))
    {
        cursor.classList.add('hover-effect');
    } else {
        cursor.classList.remove('hover-effect');
    }

    lastMouseX = mouseX;
    lastMouseY = mouseY;
});

function animateCursor() {
    cursorX += (window.scrollX + mouseX - cursorX) * delay;
    cursorY += (window.scrollY + mouseY - cursorY) * delay;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    requestAnimationFrame(animateCursor);
}

animateCursor();
