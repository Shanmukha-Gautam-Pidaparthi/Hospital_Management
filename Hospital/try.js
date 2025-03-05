document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let isPaused = false;

    // Function to rotate slider
    function rotateSlider() {
        if (!isPaused) {
            slides.forEach((slide, index) => {
                slide.style.transform = `rotateY(${index * (360 / slides.length)}deg) translateZ(150px)`;
            });
        }
    }

    // Rotate slider initially
    rotateSlider();

    // Rotate slider continuously
    setInterval(rotateSlider, 3000); // Change rotation speed as needed

    // Pause rotation on hover
    slider.addEventListener('mouseenter', () => {
        isPaused = true;
    });

    // Resume rotation on mouse leave
    slider.addEventListener('mouseleave', () => {
        isPaused = false;
    });
});
