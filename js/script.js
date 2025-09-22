// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    /* --- Universal Interactive Elements --- */
    
    // Mobile navigation menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    /* --- History Page Specific Interaction (Accordion) --- */
    
    // Accordion functionality for the history page
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            // Toggle the max-height of the content to show/hide it
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                // Set the max-height to the scrollHeight to fully expand the content
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    /* --- Culture Page Specific Interaction (Image Slider) --- */
    
    const sliderTrack = document.querySelector('.slider-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (sliderTrack && nextBtn && prevBtn) {
        let currentPosition = 0;
        const totalSlides = sliderTrack.children.length;

        nextBtn.addEventListener('click', () => {
            if (currentPosition < totalSlides - 1) {
                currentPosition++;
                updateSlider();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentPosition > 0) {
                currentPosition--;
                updateSlider();
            }
        });

        function updateSlider() {
            const itemWidth = sliderTrack.children[0].offsetWidth;
            sliderTrack.style.transform = `translateX(${-currentPosition * itemWidth}px)`;
        }

        // Update the slider on window resize to ensure correct positioning
        window.addEventListener('resize', updateSlider);
    }
});