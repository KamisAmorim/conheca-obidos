// Função para verificar se o elemento está visível
function revealCards() {
    const cards = document.querySelectorAll('.materia-card');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
        const elementTop = card.getBoundingClientRect().top;
        // Ajuste: anima quando o topo do card estiver a 100px da base da tela
        if (elementTop < windowHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Escutadores de eventos
window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards); // Garante que rode ao carregar