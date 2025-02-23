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

    // Gestion du menu burger sur mobile
    let lastScrollTop = 0;
    const delta = 5;

    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768) { // Seulement sur mobile
            const st = window.pageYOffset || document.documentElement.scrollTop;
            
            // Vérifie si l'utilisateur a scrollé plus que delta
            if (Math.abs(lastScrollTop - st) <= delta) return;
            
            if (st > lastScrollTop) {
                // Scroll vers le bas
                burgerMenu.style.transform = 'translateY(-100%)';
                burgerMenu.style.opacity = '0';
            } else {
                // Scroll vers le haut
                burgerMenu.style.transform = 'translateY(0)';
                burgerMenu.style.opacity = '1';
            }
            
            lastScrollTop = st <= 0 ? 0 : st;
        }
    }, false);

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
