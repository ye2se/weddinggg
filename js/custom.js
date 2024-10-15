$(function () {
    const MainVisual = new Swiper('.main_visual_slide', {
        loop: true,
        effect: "fade",
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
})

$(function () {
    const MainHall = new Swiper('swiper_container', {
        observer: true,
        observeParents: true,

        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: 'swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    })
})