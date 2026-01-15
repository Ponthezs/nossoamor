// ===== CALCULAR DIAS JUNTOS =====
function calcularDiasJuntos() {
    // Data do primeiro encontro: 18/02/2024
    const dataInicio = new Date(2024, 1, 18); // Mês é 0-indexed
    const dataAtual = new Date();
    
    const diferenca = dataAtual - dataInicio;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    
    const element = document.getElementById('diasJuntos');
    if (element) {
        animarNumero(element, dias);
    }
}

// Animar números
function animarNumero(element, finalNumber) {
    let currentNumber = 0;
    const increment = Math.ceil(finalNumber / 50);
    
    const interval = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= finalNumber) {
            currentNumber = finalNumber;
            clearInterval(interval);
        }
        element.textContent = currentNumber;
    }, 30);
}

// Chamar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    calcularDiasJuntos();
    setupObserver();
});

// ===== MENSAGENS ESPECIAIS =====
const mensagensArray = [
    {
        titulo: "Para Eloah 💕",
        texto: "Você é a pessoa mais incrível que já conheci. Seu sorriso ilumina meus dias, seu amor me torna uma pessoa melhor. Obrigado por existir e por estar ao meu lado em cada momento. Você é meu amor, minha inspiração e meu melhor amigo. Te amo infinitamente! ❤️"
    },
    {
        titulo: "Para Felipe 💙",
        texto: "Você é meu herói, meu companheiro e meu grande amor. Cada dia ao seu lado é uma bênção. Suas atitudes, seu carinho e sua presença fazem toda a diferença na minha vida. Obrigado por me amar do jeito que ama. Você é tudo o que eu sempre desejei. Te amo muito! 💙"
    },
    {
        titulo: "Nosso Amor 💕",
        texto: "A cada dia que passa, nosso amor cresce mais. Somos uma dupla perfeita, juntos superamos qualquer desafio. Nossos momentos felizes ficarão para sempre em nossos corações. O futuro é nosso e será cheio de aventuras, risadas e muito amor. Somos para sempre! 💕"
    }
];

let mensagemAtual = -1;

function mostrarMensagem(index) {
    const display = document.getElementById('mensagemDisplay');
    const texto = document.getElementById('textoMensagem');
    
    if (!display) return;
    
    mensagemAtual = index;
    texto.textContent = mensagensArray[index].texto;
    
    display.classList.add('show');
    
    // Efeito de sparkle
    criarSparkles(display);
}

function fecharMensagem() {
    const display = document.getElementById('mensagemDisplay');
    if (display) {
        display.classList.remove('show');
    }
}

// Fechar mensagem ao clicar fora
document.addEventListener('click', function(event) {
    const display = document.getElementById('mensagemDisplay');
    const mensagensContainer = document.querySelector('.mensagens-container');
    
    if (display && display.classList.contains('show') && 
        !display.contains(event.target) && 
        mensagensContainer && !mensagensContainer.contains(event.target)) {
        fecharMensagem();
    }
});

// ===== CURIOSIDADES ROMÂNTICAS =====
const curiosidades = [
    "💕 Sabias que o amor verdadeiro é quando você quer estar perto da pessoa sempre?",
    "😊 Sabias que um simples sorriso pode fazer uma grande diferença no dia de alguém?",
    "🎵 Sabias que casais que riem juntos têm relacionamentos mais duradouros?",
    "🤝 Sabias que agarrar a mão de alguém aumenta os sentimentos de amor e confiança?",
    "🌍 Sabias que passar tempo juntos é mais importante do que coisas materiais?",
    "💬 Sabias que discutir abertamente fortalece o relacionamento?",
    "💝 Sabias que pequenos gestos de carinho têm mais impacto do que você imagina?",
    "👂 Sabias que ouvir ativamente é uma forma de mostrar amor genuíno?",
    "🌟 Sabias que apoiar os sonhos do outro é fundamental para um relacionamento feliz?",
    "💖 Sabias que dizer 'eu te amo' nunca é demais quando você realmente sente?",
    "🎯 Sabias que casais que compartilham interesses têm mais conexão?",
    "🕊️ Sabias que o perdão é a chave para um amor duradouro?",
    "📸 Sabias que criar memórias juntas é mais importante que ter coisas juntas?",
    "🎁 Sabias que surpresas pequenas mantêm a centelha viva?",
    "✨ Sabias que você é melhor com essa pessoa ao seu lado?"
];

let curiosidadeAtual = 0;

function proximaCuriosidade() {
    const quoteText = document.getElementById('quoteText');
    if (!quoteText) return;
    
    curiosidadeAtual = Math.floor(Math.random() * curiosidades.length);
    
    // Efeito de saída
    quoteText.style.opacity = '0';
    
    setTimeout(() => {
        quoteText.textContent = curiosidades[curiosidadeAtual];
        quoteText.style.opacity = '1';
    }, 300);
}

// Adicionar transição suave ao texto
const quoteText = document.getElementById('quoteText');
if (quoteText) {
    quoteText.style.transition = 'opacity 0.3s ease';
}

// ===== EFEITOS DE SPARKLE =====
function criarSparkles(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        sparkle.style.width = '8px';
        sparkle.style.height = '8px';
        sparkle.style.backgroundColor = '#ff1744';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';
        sparkle.style.boxShadow = '0 0 15px #ff1744';
        
        document.body.appendChild(sparkle);
        
        const randomX = (Math.random() - 0.5) * 150;
        const randomY = (Math.random() - 0.5) * 150;
        
        sparkle.animate([
            { 
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            { 
                transform: `translate(${randomX}px, ${randomY}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
        
        setTimeout(() => sparkle.remove(), 1000);
    }
}

// ===== SETUP SCROLL OBSERVER =====
function setupObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.razao-item, .timeline-content, .galeria-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== CONFETE AO MOSTRAR MENSAGEM =====
function criarConfete() {
    for (let i = 0; i < 12; i++) {
        const confete = document.createElement('div');
        confete.style.position = 'fixed';
        confete.style.pointerEvents = 'none';
        confete.innerHTML = '💕';
        confete.style.fontSize = '2rem';
        confete.style.left = Math.random() * 100 + '%';
        confete.style.top = '-30px';
        confete.style.zIndex = '9998';
        confete.style.opacity = '1';
        
        document.body.appendChild(confete);
        
        const randomX = (Math.random() - 0.5) * 300;
        const duration = 2.5 + Math.random() * 1.5;
        
        confete.animate([
            { 
                transform: 'translateY(0) translateX(0) rotate(0deg)',
                opacity: 1
            },
            { 
                transform: `translateY(${window.innerHeight + 100}px) translateX(${randomX}px) rotate(360deg)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'ease-in'
        });
        
        setTimeout(() => confete.remove(), duration * 1000);
    }
}

// Envolver mostrarMensagem para adicionar confete
const originalMostrar = window.mostrarMensagem;
window.mostrarMensagem = function(index) {
    originalMostrar(index);
    criarConfete();
};

// ===== ATUALIZAR DIAS JUNTOS DIARIAMENTE =====
setInterval(calcularDiasJuntos, 1000 * 60 * 60); // Atualizar a cada hora
