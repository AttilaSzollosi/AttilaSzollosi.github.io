function setLanguage(language) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        if (element.getAttribute('data-lang') === language) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });
}

// Add this script for mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});