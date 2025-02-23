document.addEventListener('DOMContentLoaded', function() {
    // Éléments à animer
    const elementsToAnimate = [
        '.card',
        '.service-details > *',
        '.benefit-section',
        'h1, h2, h3',
        '.cta-section',
        '.feature-section',
        '.video-section'
    ];

    // Ajouter la classe fade-in-up à tous les éléments
    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.classList.add('fade-in-up');
        });
    });

    // Configuration de l'Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    // Créer l'observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Désactiver l'observation une fois l'animation déclenchée
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer tous les éléments avec la classe fade-in-up
    document.querySelectorAll('.fade-in-up').forEach(element => {
        observer.observe(element);
    });
});
