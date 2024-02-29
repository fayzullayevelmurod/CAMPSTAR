// Header menu
$(document).ready(function () {
    $(".menu-open").click(function () {
        $(".header-mob").addClass("active");
    });

    $(".menu-close").click(function () {
        $(".header-mob").removeClass("active");
    });
    $(".header-mob-bg").click(function () {
        $(".header-mob").removeClass("active");
    });
});

// Home sldie
var homeSlide = new Swiper(".homeSlide", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
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
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Catalog wrap slide
var catalogWrapSlide = new Swiper(".catalogWrapSlide", {
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".catalog-slide-pagination .swiper-button-next",
        prevEl: ".catalog-slide-pagination .swiper-button-prev",
    },
});

// Product slide
var productSlide = new Swiper(".productSlide", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    clickable: true,
});
var productSlide2 = new Swiper(".productSlide2", {
    spaceBetween: 100,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: productSlide,
    },
});