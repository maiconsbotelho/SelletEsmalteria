function toggleMenu() {
    var navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = (navMenu.style.display === 'none' || navMenu.style.display === '') ? 'block' : 'none';
}

// Fechar o menu ao clicar em um item (opcional)
document.querySelectorAll('.menu-item a').forEach(function (item) {
    item.addEventListener('click', function () {
        var navMenu = document.querySelector('.nav-menu');
        if (window.innerWidth < 768) {
            navMenu.style.display = 'none';
        }
    });
});

// Fechar o menu ao redimensionar a janela (opcional)
window.addEventListener('resize', function () {
    var navMenu = document.querySelector('.nav-menu');
    if (window.innerWidth >= 768) {
        navMenu.style.display = '';
    }
});
