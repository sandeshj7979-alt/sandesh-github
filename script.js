const toggleBtn = document.getElementById('dark-mode-toggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    toggleBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Simple Image Zoom Effect for Gallery
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.onclick = () => {
        image.style.transform = image.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)';
        image.style.zIndex = "100";
        image.style.position = "relative";
        image.style.transition = "0.3s";
    };
});
