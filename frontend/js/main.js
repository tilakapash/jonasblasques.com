// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Digital Garden initialized');
    
    // Add smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});