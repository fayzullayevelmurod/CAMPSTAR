

// Home sldie
var homeSlide = new Swiper(".homeSlide", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});

// Catalog slide
var catalogSlide = new Swiper(".catalogSlide", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});