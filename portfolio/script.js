// script.js

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('visible'); // Toggle visibility of the navigation links
}
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent the default anchor click behavior
            event.preventDefault();

            // Get the target section's ID from the href attribute
            const targetId = this.getAttribute('href').substring(1);

            // Scroll to the target section smoothly
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Show the button when you scroll down 100px from the top of the page
window.onscroll = function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to the top of the page when the button is clicked
document.querySelector('.back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});