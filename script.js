// Aguarda o documento HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona todos os elementos que queremos animar (os cartões)
    const elementsToAnimate = document.querySelectorAll('.card-projeto, .card-youtube, .sobre-content');

    // Configuração do Observador (Observer)
    const observerOptions = {
        root: null, // usa o viewport (tela do navegador)
        rootMargin: '0px',
        threshold: 0.1 // a animação dispara quando 10% do elemento aparece na tela
    };

    // Cria o observador de interseção
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona uma classe quando o elemento entra na tela
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                // Para de observar o elemento após a animação
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Aplica o estado inicial (invisível e levemente para baixo) e começa a observar
    elementsToAnimate.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});
