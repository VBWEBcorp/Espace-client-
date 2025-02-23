document.addEventListener('DOMContentLoaded', () => {
    // Gestion du menu burger
    const burgerMenu = document.querySelector('.burger-menu');
    const sideMenu = document.querySelector('.side-menu');
    const contentWrapper = document.querySelector('.content-wrapper');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        sideMenu.classList.toggle('active');
        contentWrapper.classList.toggle('menu-active');
    });

    // Fermer le menu au clic sur un lien
    const menuLinks = document.querySelectorAll('.side-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                burgerMenu.classList.remove('active');
                sideMenu.classList.remove('active');
                contentWrapper.classList.remove('menu-active');
            }
        });
    });

    // Animation des cartes au scroll
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    // Gestion du chat
    const chatBubble = document.querySelector('.chat-bubble');
    
    chatBubble.addEventListener('click', () => {
        window.location.href = 'mailto:contact@vbweb.fr';
    });
});
