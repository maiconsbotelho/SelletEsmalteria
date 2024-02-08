// TOGGLE MENU
function toggleNav(event) {
    event.stopPropagation(); 
    var navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('open');

    var navToggle = document.querySelector('.nav-toggle');
    navToggle.classList.toggle('open');

    var toggleIcon = navToggle.querySelector('.toggle-icon');
    if (navToggle.classList.contains('open')) {
        toggleIcon.textContent = '✕'; 
    } else {
        toggleIcon.textContent = '☰';
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

// Fechar o menu quando o usuário clicar fora dele
function fecharMenuFora(e) {
    var navMenu = document.querySelector('.nav-menu');
    if (!navMenu.contains(e.target)) {
        navMenu.classList.remove('open');

        // Atualiza o ícone do botão toggle
        var navToggle = document.querySelector('.nav-toggle');
        var toggleIcon = navToggle.querySelector('.toggle-icon');
        toggleIcon.textContent = '☰';
    }
}

// Adiciona um ouvinte de evento de clique ao documento inteiro
document.addEventListener('click', fecharMenuFora);

// CAROUSEL SECTION
$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    arrows: false,
    fade: true,
    asNavFor: '.carousel'
});

$('.carousel').slick({
    dots: false,
    infinite: true,
    focusOnSelect: true,
    lazyLoad: 'ondemand',
    asNavFor: '.slider',
    centerPadding: '10px',
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});
