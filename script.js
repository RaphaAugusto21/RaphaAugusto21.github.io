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

// Seleciona o botão de alternância
const themeToggleBtn = document.getElementById('theme-toggle');

// Verifica se o usuário já visitou o site antes e tinha escolhido o Modo Claro
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
}

// Escuta o clique no botão
themeToggleBtn.addEventListener('click', () => {
    // Alterna a classe .light-mode no <body>
    document.body.classList.toggle('light-mode');
    
    // Salva a preferência do usuário no navegador
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});
