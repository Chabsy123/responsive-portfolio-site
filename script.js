const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
// toggle your menu icon to show content
menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-line"
    );
});
// closes the menu bar as soon as an element(e.g about,contact) is clicked
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container for the elements to be displayed as the scroll reveals 
ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content h4", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000
});

ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1500
});

ScrollReveal().reveal(".header__content .btn", {
    ...scrollRevealOption,
    delay: 2000
});

// about container
ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin:"left",
});

ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".about__content p", {
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".about__content h4", {
    ...scrollRevealOption,
    delay:1500,
});

ScrollReveal().reveal(".about__btns", {
    ...scrollRevealOption,
    delay:2000,
});