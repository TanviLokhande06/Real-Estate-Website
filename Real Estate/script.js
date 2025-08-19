var search_type_btn = document.querySelectorAll(".search_type_btn");

search_type_btn.forEach((search_btn) => {
    search_btn.addEventListener("click", () => {
        search_type_btn.forEach((btn) => { btn.classList.remove("active") });
        search_btn.classList.add("active");
    })
});

document.addEventListener("DOMContentLoaded", () => {
    var tabsbtn = document.querySelectorAll(".featured_properties_menu_list li button");
    var tabs = document.querySelectorAll(".featured_tab");

    tabsbtn.forEach((tabbtn) => {
        tabbtn.addEventListener("click", () => {
            tabsbtn.forEach((btn) => { btn.classList.remove("active") });
            tabs.forEach((tab) => { tab.classList.remove("active") });

            document.getElementById(tabbtn.dataset.tab).classList.add("active");
            tabbtn.classList.add("active");
        })
    });
});

var swiper = new Swiper(".citiesSwiper", {
    spaceBetween: 30,
    slidesPerView: 1,
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
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".brandSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
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
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".TestimonialSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction:false,
    }
})

let open_menu_btn = document.querySelector("#open_menu_btn");
let close_menu_btn = document.querySelector("#close_menu_btn");
let navbar = document.querySelector("#navbar");
let navlinks = document.querySelectorAll(".nav_container .nav_list_container li a");

open_menu_btn.addEventListener("click", () => {
    navbar.classList.add("active");
})

close_menu_btn.addEventListener("click", () => {
    navbar.classList.remove("active");
})

navlinks.forEach((link) => {
    link.addEventListener('click', () => {
        navbar.classList.remove("active");
    })
})

const sb = ScrollReveal({
    duration: 2500,
    delay: 400,
    mobile: false,
    origin: 'bottom',
    distance: '60px',
});

sb.reveal('.hero_section .hero_container .hero_text_container .hero_text,.hero_section .hero_container .hero_text_container .hero_desc,.hero_container .search_form_container .search_type_container .search_type_inner ,.hero_section .hero_container .search_form_container .search_form,.title_container .subtitle,.title_container .title,.featured_properties_menu_container,.featured_properties_section .featured_properties_container .content_container,.top_properties_container .content_container,.cities_content_container,.about_section .about_container .content_container .about_col .img_container img,.about_section .about_container .content_container .about_col .text_container .desc,.about_section .about_container .content_container .about_col .text_container .content,.about_section .about_container .content_container .about_col .text_container blockquote,.testimonial_container .content_container,.team_container .content_container,.brand_container .content_container');
sb.reveal('.services_col .img_container img,.contact_section .contact_container .contact_col:nth-child(1)', { origin: 'left' });
sb.reveal('.services_col .text_container,.contact_section .contact_container .contact_col:nth-child(2)', { origin: 'right' })