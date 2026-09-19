// ===============================
// SREYANSH DAS — PORTFOLIO SCRIPT
// ===============================

// ---------- Cursor Glow ----------
const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {
    document.addEventListener("mousemove", (e) => {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
    });
}


// ---------- Mobile Menu ----------
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        if (navLinks.classList.contains("open")) {
            menuBtn.innerHTML = "✕";
        } else {
            menuBtn.innerHTML = "☰";
        }
    });

    // Close menu after clicking a link
    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuBtn.innerHTML = "☰";
        });
    });
}


// ---------- Dark / Light Mode ----------
const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            themeBtn.innerHTML = "☀";
            localStorage.setItem("theme", "light");
        } else {
            themeBtn.innerHTML = "☾";
            localStorage.setItem("theme", "dark");
        }
    });

    // Remember user's theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
        themeBtn.innerHTML = "☀";
    } else {
        themeBtn.innerHTML = "☾";
    }
}


// ---------- Scroll Reveal Animation ----------
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


// ---------- Active Navigation Link ----------
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveNav() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach((link) => {
        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


// ---------- Smooth Scroll ----------
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ---------- Contact Form ----------
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageInput = contactForm.querySelector("textarea");

        const name = nameInput ? nameInput.value.trim() : "";
        const email = emailInput ? emailInput.value.trim() : "";
        const message = messageInput ? messageInput.value.trim() : "";

        if (!name || !email || !message) {
            alert("Please fill in all the fields.");
            return;
        }

        // Opens the user's email app
        const subject = encodeURIComponent(
            `Portfolio Contact from ${name}`
        );

        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        window.location.href =
            `mailto:sreyanshdas@example.com?subject=${subject}&body=${body}`;
    });
}


// ---------- Typing Effect ----------
const typingElement = document.querySelector(".typing");

if (typingElement) {
    const words = [
        "AI/ML Student",
        "Python Developer",
        "C Programmer",
        "Future Entrepreneur"
    ];

    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (!deleting) {
            typingElement.textContent =
                currentWord.substring(0, characterIndex + 1);

            characterIndex++;

            if (characterIndex === currentWord.length) {
                deleting = true;

                setTimeout(typeEffect, 1500);
                return;
            }
        } else {
            typingElement.textContent =
                currentWord.substring(0, characterIndex - 1);

            characterIndex--;

            if (characterIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        setTimeout(typeEffect, deleting ? 55 : 90);
    }

    typeEffect();
}


// ---------- Button Ripple Effect ----------
document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function (e) {
        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();

        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});


// ---------- Parallax Effect ----------
const heroArt = document.querySelector(".hero-art");

if (heroArt) {
    document.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 40;
        const y = (window.innerHeight / 2 - e.clientY) / 40;

        heroArt.style.transform =
            `translate(${x}px, ${y}px)`;
    });
}


// ---------- Current Year ----------
const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ---------- Page Loaded ----------
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});