document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 1000,
        once: true
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollTop = 0;
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Bedankt voor uw bericht! Ik neem zo spoedig mogelijk contact met u op.');
        this.reset();
    });
});