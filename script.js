// ------------------ SMOOTH SCROLL ------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// ------------------ TYPING EFFECT ------------------
const text = ["Web Developer", "Designer", "Freelancer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000);
    } else {
        setTimeout(type, 100);
    }
}

type();


// ------------------ SCROLL ANIMATION ------------------
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".hidden").forEach(el => {
    observer.observe(el);
});


// ------------------ NAVBAR SCROLL EFFECT ------------------
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});


// ------------------ DARK MODE TOGGLE ------------------
const toggleBtn = document.querySelector("#theme-toggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
}


// ------------------ SCROLL TO TOP BUTTON ------------------
const topBtn = document.querySelector("#topBtn");

window.onscroll = function () {
    if (topBtn) {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }
};

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// ------------------ ACTIVE NAV LINK ------------------
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
