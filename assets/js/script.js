function toggleNav(event) {
    event.stopPropagation(); // Impede a propagação do evento
    var navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('open');

    var navToggle = document.querySelector('.nav-toggle');
    navToggle.classList.toggle('open');

    var toggleIcon = navToggle.querySelector('.toggle-icon');
    if (navToggle.classList.contains('open')) {
        toggleIcon.textContent = '✕'; // Altera o conteúdo para "x" quando o menu é aberto
    } else {
        toggleIcon.textContent = '☰'; // Altera o conteúdo para o ícone original quando o menu é fechado
    }
}

// Fechar o menu ao clicar em um item 
document.querySelectorAll('.menu-item a').forEach(function (item) {
    item.addEventListener('click', function () {
        var navMenu = document.querySelector('.nav-menu');
        if (window.innerWidth < 768) {
            navMenu.style.display = 'none';
        }
    });
});

// Fechar o menu ao redimensionar a janela 
window.addEventListener('resize', function () {
    var navMenu = document.querySelector('.nav-menu');
    if (window.innerWidth >= 768) {
        navMenu.style.display = '';
    }
});

// Função para fechar o menu quando o usuário clica fora dele
function fecharMenuFora(e) {
    var navMenu = document.querySelector('.nav-menu');
    if (!navMenu.contains(e.target)) {
        // Se o clique ocorreu fora do menu, feche o menu
        navMenu.classList.remove('open');

        // Atualiza o ícone do botão toggle
        var navToggle = document.querySelector('.nav-toggle');
        var toggleIcon = navToggle.querySelector('.toggle-icon');
        toggleIcon.textContent = '☰'; // Altera o conteúdo para o ícone de hamburguer
    }
}

// Adiciona um ouvinte de evento de clique ao documento inteiro
document.addEventListener('click', fecharMenuFora);
