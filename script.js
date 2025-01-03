// Toggle Menu Functionality
const menu = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

if (menu && navbar) {
    menu.onclick = () => {
        menu.classList.toggle("move");
        navbar.classList.toggle("open-menu");
    };

    // Close menu on scroll
    window.onscroll = () => {
        menu.classList.remove("move");
        navbar.classList.remove("open-menu");
    };
}

// Selling Swiper Configuration
const swiper = new Swiper(".selling-content", {
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        750: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
    },
});

// Header Background Change on Scroll
const header = document.querySelector("header");

if (header) {
    window.addEventListener("scroll", () => {
        header.classList.toggle("header-active", window.scrollY > 0);
    });
}

// ScrollReveal Animation
const animate = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
});

animate.reveal(".nav, .heading, .subscribe p, .email-box");
animate.reveal(".home-layer1, .home-layer2, .subscribe img", { origin: "left" });
animate.reveal(".home-content", { origin: "bottom" });
animate.reveal(".deal-box, .offer-box, .sale-box, .ticket-box", { interval: 100 });
