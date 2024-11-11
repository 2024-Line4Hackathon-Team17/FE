export function createLoopingText(el) {
    let xPos = 0;
    const speed = 0.5;

    function animate() {
        xPos -= speed;
        el.style.transform = `translateX(${xPos}px)`;

        const resetPoint = el.scrollWidth / 2;
        if (Math.abs(xPos) >= resetPoint) {
            xPos = 0;
        }

        requestAnimationFrame(animate);
    }

    animate();
}
