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

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll function
    function smoothScroll(target) {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Add click event listeners to sidebar links
    document.querySelectorAll('.sidebar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScroll(targetId);
        });
    });
});

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', function() {
        this.classList.toggle('open');
    });
});