// MOBILE MENU
document.addEventListener('DOMContentLoaded', function() {
    
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    const toggleIcon = navToggle.querySelector('.toggle-icon');
    const menuItems = document.querySelectorAll('.menu-item a');

    // TOGGLE MENU
    function toggleNav(event) {
        event.stopPropagation(); 
        navMenu.classList.toggle('open');
        navToggle.classList.toggle('open');
        toggleIcon.textContent = navToggle.classList.contains('open') ? '✕' : '☰';
    }

    // Fechar o menu ao clicar em um item 
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            if (window.innerWidth < 768) {
                navMenu.classList.remove('open');
            }
        });
    });

    // Fechar o menu ao redimensionar a janela 
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) {
            navMenu.classList.remove('open');
        }
    });

    // Fechar o manu quando o usuário rolar a página
    window.addEventListener('scroll', function() {
        if (navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            navToggle.classList.remove('open');
            toggleIcon.textContent = '☰';
        }
    });

    // Fechar o menu quando o usuário clicar fora dele
    function fecharMenuFora(e) {
        if (!navMenu.contains(e.target)) {
            navMenu.classList.remove('open');
            toggleIcon.textContent = '☰';
        }
    }

    // Adiciona um ouvinte de evento de clique ao documento inteiro
    document.addEventListener('click', fecharMenuFora);

    // Evento de clique no toggle para abrir e fechar o menu
    navToggle.addEventListener('click', toggleNav);
});

// CARREGAMENTO DE IMAGENS

document.addEventListener('DOMContentLoaded', function() {
    // Lista de URLs das imagens dos banners
    const bannerUrls = [
        '../img/banner.png',
        '../img/banner-galeria.jpg'
       
    ];

    // Função para carregar uma imagem em segundo plano
    function preloadImage(url) {
        const img = new Image();
        img.src = url;
    }

    // Iterar sobre a lista de URLs e pré-carregar as imagens
    bannerUrls.forEach(preloadImage);
});



// CAROUSEL SECTION
$('.slider-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    arrows: false,
    fade: true,
    asNavFor: '.carousel-content'
});

$('.carousel-content').slick({
    dots: false,
    infinite: true,
    focusOnSelect: true,
    lazyLoad: 'ondemand',
    asNavFor: '.slider-content',
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
