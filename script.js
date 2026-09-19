/* =========================================
   SREYANSH DAS PORTFOLIO
   ========================================= */


/* ================= CURSOR GLOW ================= */

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    if (!cursorGlow) return;

    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";

});


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        menuToggle.textContent =
            navLinks.classList.contains("open")
                ? "×"
                : "☰";

    });


    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuToggle.textContent = "☰";

        });

    });

}


/* ================= THEME ================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("sreyansh-theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    if (themeToggle) {
        themeToggle.textContent = "☾";
    }

}


if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const isLight =
            document.body.classList.contains("light");

        localStorage.setItem(
            "sreyansh-theme",
            isLight ? "light" : "dark"
        );

        themeToggle.textContent =
            isLight ? "☾" : "☼";

    });

}


/* ================= TYPING EFFECT ================= */

const typingText = document.getElementById("typingText");

const words = [
    "Python",
    "C Programming",
    "Artificial Intelligence",
    "Machine Learning",
    "Web Development",
    "Git & GitHub"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
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


/* ================= GITHUB DATA ================= */

async function loadGitHubData() {

    try {

        const response = await fetch(
            "https://api.github.com/users/sreyanshdas2008"
        );

        if (!response.ok) {
            throw new Error("GitHub API request failed");
        }

        const data = await response.json();


        const repoCount =
            document.getElementById("repoCount");

        const followerCount =
            document.getElementById("followerCount");


        if (repoCount) {
            repoCount.textContent =
                data.public_repos;
        }


        if (followerCount) {
            followerCount.textContent =
                data.followers;
        }

    } catch (error) {

        console.log(
            "GitHub data could not be loaded."
        );

    }

}

loadGitHubData();


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (!name || !email || !message) {

                formMessage.textContent =
                    "Please fill in all fields.";

                return;

            }


            const subject =
                encodeURIComponent(
                    "Portfolio message from " + name
                );


            const body =
                encodeURIComponent(
                    "Name: " + name +
                    "\nEmail: " + email +
                    "\n\nMessage:\n" + message
                );


            const mailto =
                "mailto:Sreyanshdas2008@gmail.com" +
                "?subject=" +
                subject +
                "&body=" +
                body;


            formMessage.textContent =
                "Opening your email app...";


            window.location.href = mailto;

        }
    );

}


/* ================= ACTIVE NAV ================= */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");


function updateActiveNav() {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 130;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
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


/* ================= FAQ ================= */

document.querySelectorAll(".faq-item")
    .forEach(item => {

        item.addEventListener("toggle", () => {

            if (!item.open) return;

            document
                .querySelectorAll(".faq-item")
                .forEach(other => {

                    if (
                        other !== item &&
                        other.open
                    ) {

                        other.open = false;

                    }

                });

        });

    });


/* ================= CURRENT YEAR ================= */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* ================= CONSOLE ================= */

console.log(
    "%cSreyansh Das — Portfolio",
    "color:#A78BFA;font-size:18px;font-weight:bold;"
);

console.log(
    "%cLearning today. Building tomorrow.",
    "color:#22D3EE;font-size:12px;"
);