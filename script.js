// ================================
// SREYANSH DAS — PORTFOLIO
// ================================


// Cursor glow
const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {

    document.addEventListener("mousemove", (event) => {

        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;

    });

}


// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        menuBtn.textContent =
            navLinks.classList.contains("open")
                ? "✕"
                : "☰";

    });


    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");
            menuBtn.textContent = "☰";

        });

    });

}


// Theme
const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light");
        themeBtn.textContent = "☀";

    }


    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const lightMode =
            document.body.classList.contains("light");

        themeBtn.textContent =
            lightMode ? "☀" : "☾";

        localStorage.setItem(
            "theme",
            lightMode ? "light" : "dark"
        );

    });

}


// Scroll reveal
const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

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


// Active navigation
const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");


function updateActiveNav() {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            current = section.id;

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);

updateActiveNav();


// Smooth scrolling
document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener("click", event => {

        const targetID =
            link.getAttribute("href");

        const target =
            document.querySelector(targetID);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Typing effect
const typing =
    document.querySelector(".typing");

if (typing) {

    const words = [
        "C programming",
        "Python",
        "AI / ML",
        "Web development"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;


    function type() {

        const word = words[wordIndex];

        if (!deleting) {

            typing.textContent =
                word.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === word.length) {

                deleting = true;

                setTimeout(type, 1400);

                return;

            }

        } else {

            typing.textContent =
                word.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1) % words.length;

            }

        }

        setTimeout(
            type,
            deleting ? 45 : 85
        );

    }


    type();

}


// Contact form
const contactForm =
    document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const name =
                contactForm.querySelector(
                    'input[type="text"]'
                ).value.trim();

            const email =
                contactForm.querySelector(
                    'input[type="email"]'
                ).value.trim();

            const message =
                contactForm.querySelector(
                    "textarea"
                ).value.trim();


            if (!name || !email || !message) {

                alert(
                    "Please fill in all the fields."
                );

                return;

            }


            const subject =
                encodeURIComponent(
                    `Portfolio message from ${name}`
                );


            const body =
                encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\n\n${message}`
                );


            // Replace with your real email
            window.location.href =
                `mailto:your-email@example.com?subject=${subject}&body=${body}`;

        }
    );

}


// Current year
const year =
    document.querySelector("#year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


// Page loaded
window.addEventListener(
    "load",
    () => {

        document.body.classList.add("loaded");

    }
);