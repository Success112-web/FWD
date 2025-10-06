Document.addEventListener('DOMContentLoaded', () => {
    // 1. Parallax Effect for Hero Section (Pseudo-3D Enhancement)
    const heroSection = document.getElementById('home');
    const profileCard = document.querySelector('.profile-card');

    if (heroSection && profileCard) {
        heroSection.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 40; // Adjust for sensitivity
            const y = (window.innerHeight / 2 - e.pageY) / 40;// The variables x and y were calculated here:
// const x = (window.innerWidth / 2 - e.pageX) / 40;
// const y = (window.innerHeight / 2 - e.pageY) / 40;

// Corrected line for mousemove:
profileCard.style.transform = rotateY(${x / 4}deg) rotateX(${y / 4}deg) scale(1.0);

            // Apply slight rotation to the profile card
            
        });
// Reset on mouse leave: Corrected to use 0deg rotation for a flat look.
        heroSection.addEventListener('mouseleave', () => {
            // Corrected line: Resets to a flat, unrotated state.
            profileCard.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)'; 
        });
    }
 // 2. Simple Scroll-based Navbar Styling (Optional but good for UX)
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        // Add a shadow to the navbar after scrolling past the hero section
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/Show Navbar on scroll for a clean look (Optional)
        if (lastScrollY < window.scrollY && window.scrollY > 200) {
            // Down scroll
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Up scroll
            navbar.style.transform = 'translateY(0)';
        }
   lastScrollY = window.scrollY;
    });

    // Initial check for a subtle shadow if the page is loaded scrolled
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
}
});
