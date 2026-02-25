document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.querySelector("#menu-icon");
    const nav = document.querySelector(".nav-links");
    const closeBtn = document.querySelector("#close");
    const navLinks = document.querySelectorAll(".nav-links a");

    if (!hamburger || !nav) return; // Safety check

    // Check Mobile Screen
    const isMobile = () => window.innerWidth <= 968;

    // Open Menu
    const openNav = () => {
        nav.classList.add("active");
        closeBtn?.classList.add("active");
        hamburger.classList.add("hidden");
    };

    // Close Menu
    const closeNav = () => {
        nav.classList.remove("active");
        closeBtn?.classList.remove("active");
        hamburger.classList.remove("hidden");
    };

    // Toggle Menu
    const toggleNav = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!isMobile()) return;

        nav.classList.contains("active") ? closeNav() : openNav();
    };

    // Events
    hamburger.addEventListener("click", toggleNav);
    closeBtn?.addEventListener("click", closeNav);

    // Close on Nav Link Click
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (isMobile()) closeNav();
        });
    });

    // Close on Scroll (Mobile Only)
    window.addEventListener("scroll", () => {
        if (isMobile() && nav.classList.contains("active")) {
            closeNav();
        }
    });

    // Reset on Resize
    window.addEventListener("resize", () => {
        if (!isMobile()) {
            closeNav();
        }
    });

});