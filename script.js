/* =========================================================
   SREYANSH DAS — PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------------------------------------
       CURRENT YEAR
    --------------------------------------------------------- */
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* ---------------------------------------------------------
       MOBILE MENU
    --------------------------------------------------------- */
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });
    }


    /* ---------------------------------------------------------
       SMOOTH SCROLL
    --------------------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    /* ---------------------------------------------------------
       ACTIVE NAVIGATION
    --------------------------------------------------------- */
    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll(".nav-links a");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 180;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navigationLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }

        });
    }

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();


    /* ---------------------------------------------------------
       SCROLL REVEAL ANIMATION
    --------------------------------------------------------- */
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* ---------------------------------------------------------
       TYPING EFFECT
    --------------------------------------------------------- */
    const typingElement = document.querySelector(".typing-text");

    if (typingElement) {

        const words = [
            "CSE AI/ML Student",
            "Python Learner",
            "C Programmer",
            "Web Developer",
            "Future Entrepreneur"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === currentWord.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1800);
                    return;
                }

            } else {

                typingElement.textContent =
                    currentWord.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex =
                        (wordIndex + 1) % words.length;
                }
            }

            setTimeout(
                typeEffect,
                deleting ? 55 : 90
            );
        }

        typeEffect();
    }


    /* ---------------------------------------------------------
       THEME TOGGLE
    --------------------------------------------------------- */
    const themeToggle = document.querySelector(".theme-toggle");

    if (themeToggle) {

        const savedTheme = localStorage.getItem("portfolio-theme");

        if (savedTheme === "light") {
            document.body.classList.add("light-theme");
        }

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("light-theme");

            const theme =
                document.body.classList.contains("light-theme")
                    ? "light"
                    : "dark";

            localStorage.setItem("portfolio-theme", theme);
        });
    }


    /* ---------------------------------------------------------
       CURSOR GLOW
    --------------------------------------------------------- */
    const cursorGlow = document.querySelector(".cursor-glow");

    if (cursorGlow && window.innerWidth > 768) {

        document.addEventListener("mousemove", (e) => {

            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;

        });

    }


    /* ---------------------------------------------------------
       BUTTON RIPPLE
    --------------------------------------------------------- */
    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            ripple.classList.add("ripple");

            const rect = this.getBoundingClientRect();

            ripple.style.left =
                `${e.clientX - rect.left}px`;

            ripple.style.top =
                `${e.clientY - rect.top}px`;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

        });

    });


    /* ---------------------------------------------------------
       CONTACT FORM
       GitHub Pages is static, so this opens the visitor's
       email application using mailto.
    --------------------------------------------------------- */
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const name =
                document.getElementById("name")?.value.trim();

            const email =
                document.getElementById("email")?.value.trim();

            const message =
                document.getElementById("message")?.value.trim();

            if (!name || !email || !message) {

                alert("Please fill in all the fields.");

                return;
            }

            const subject =
                encodeURIComponent(
                    `Portfolio Contact — ${name}`
                );

            const body =
                encodeURIComponent(
                    `Name: ${name}\n` +
                    `Email: ${email}\n\n` +
                    `Message:\n${message}`
                );

            window.location.href =
                `mailto:Sreyanshdas2008@gmail.com?subject=${subject}&body=${body}`;

        });
    }


    /* ---------------------------------------------------------
       HEADER BACKGROUND ON SCROLL
    --------------------------------------------------------- */
    const navbar = document.querySelector(".navbar");

    if (navbar) {

        function navbarScroll() {

            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }

        }

        window.addEventListener("scroll", navbarScroll);

        navbarScroll();
    }


    /* ---------------------------------------------------------
       HERO PARALLAX — SUBTLE
    --------------------------------------------------------- */
    const heroVisual = document.querySelector(".hero-visual");

    if (heroVisual && window.innerWidth > 900) {

        window.addEventListener("mousemove", (e) => {

            const x =
                (window.innerWidth / 2 - e.clientX) / 70;

            const y =
                (window.innerHeight / 2 - e.clientY) / 70;

            heroVisual.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }


    /* ---------------------------------------------------------
       FAQ
    --------------------------------------------------------- */
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        item.addEventListener("toggle", () => {

            if (item.open) {

                faqItems.forEach(otherItem => {

                    if (otherItem !== item) {
                        otherItem.removeAttribute("open");
                    }

                });

            }

        });

    });


    /* ---------------------------------------------------------
       PAGE LOADED
    --------------------------------------------------------- */
    document.body.classList.add("page-loaded");

});