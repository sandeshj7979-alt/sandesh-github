// ------------------ DARK MODE (WITH SAVE) ------------------
const toggleBtn = document.getElementById('dark-mode-toggle');

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle theme
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    const isDark = document.body.classList.contains('dark-theme');

    // Save preference
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Change icon
    toggleBtn.innerHTML = isDark
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
});


// ------------------ IMAGE MODAL ZOOM (PREMIUM) ------------------
const images = document.querySelectorAll('.gallery-item img');

// Create modal dynamically
const modal = document.createElement('div');
modal.classList.add('img-modal');
document.body.appendChild(modal);

const modalImg = document.createElement('img');
modal.appendChild(modalImg);

// Open modal
images.forEach(img => {
    img.addEventListener('click', () => {
        modal.classList.add('active');
        modalImg.src = img.src;
    });
});

// Close modal
modal.addEventListener('click', () => {
    modal.classList.remove('active');
});
