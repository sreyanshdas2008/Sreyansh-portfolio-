// ================================
// SREYANSH PORTFOLIO — JAVASCRIPT
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------
    // MOBILE MENU
    // -------------------------------

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("open");

            menuBtn.textContent =
                navLinks.classList.contains("open")
                    ? "×"
                    : "☰";
        });

        // Close menu after clicking a link
        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                menuBtn.textContent = "☰";

            });

        });

    }


    // -------------------------------
    // SCROLL REVEAL
    // -------------------------------

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

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


    // -------------------------------
    // ACTIVE NAVIGATION
    // -------------------------------

    const sections =
        document.querySelectorAll("section[id]");

    const navItems =
        document.querySelectorAll(".nav-links a");

    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const id =
                            entry.target.getAttribute("id");

                        navItems.forEach(link => {

                            link.classList.remove("active");

                            if (
                                link.getAttribute("href") ===
                                `#${id}`
                            ) {

                                link.classList.add("active");

                            }

                        });

                    }

                });

            },
            {
                rootMargin: "-35% 0px -55% 0px"
            }
        );

    sections.forEach(section => {

        sectionObserver.observe(section);

    });


    // -------------------------------
    // THEME SWITCH
    // -------------------------------

    const themeBtn =
        document.querySelector(".theme-btn");

    const savedTheme =
        localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {

        document.body.classList.add("light");

        if (themeBtn) {
            themeBtn.textContent = "☀";
        }

    }

    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("light");

            const isLight =
                document.body.classList.contains("light");

            themeBtn.textContent =
                isLight ? "☀" : "☾";

            localStorage.setItem(
                "portfolio-theme",
                isLight ? "light" : "dark"
            );

        });

    }


    // -------------------------------
    // CURSOR GLOW
    // -------------------------------

    const cursorGlow =
        document.querySelector(".cursor-glow");

    if (cursorGlow && window.innerWidth > 700) {

        window.addEventListener("mousemove", event => {

            cursorGlow.style.left =
                `${event.clientX}px`;

            cursorGlow.style.top =
                `${event.clientY}px`;

        });

    }


    // -------------------------------
    // CURRENT YEAR
    // -------------------------------

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    // -------------------------------
    // SMOOTH SCROLL
    // -------------------------------

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    // -------------------------------
    // SUBTLE PROFILE PARALLAX
    // -------------------------------

    const profile =
        document.querySelector(".profile-frame");

    if (profile && window.innerWidth > 900) {

        window.addEventListener("mousemove", event => {

            const x =
                (event.clientX / window.innerWidth - 0.5);

            const y =
                (event.clientY / window.innerHeight - 0.5);

            profile.style.transform =
                `rotate(2deg)
                 translate(${x * 8}px, ${y * 8}px)`;

        });

    }


    // -------------------------------
    // BUTTON MICRO-INTERACTION
    // -------------------------------

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform =
                "translateY(-3px)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform =
                "translateY(0)";

        });

    });


    // -------------------------------
    // PAGE LOADED
    // -------------------------------

    document.body.classList.add("loaded");

});