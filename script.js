// --- 1. System Initialization & Loader ---
window.addEventListener('DOMContentLoaded', () => {
    console.log("PHARMA_OS: System Online");
    initParticles();
    createDnaTracker();
});

// --- 2. Custom Neon Cursor Logic ---
const cursor = document.createElement('div');
cursor.id = 'cursor';
cursor.style.cssText = `
    width: 20px; height: 20px; background: #00d2ff; 
    border-radius: 50%; position: fixed; pointer-events: none; 
    z-index: 10000; mix-blend-mode: difference; transition: transform 0.15s ease-out;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    
    // Update Background Glow Position
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.documentElement.style.setProperty('--x', `${x}%`);
    document.documentElement.style.setProperty('--y', `${y}%`);
});

// --- 3. Enhanced Dark Mode with System Memory ---
const toggleBtn = document.getElementById('dark-mode-toggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    
    // Haptic-style scaling effect on click
    toggleBtn.style.transform = 'scale(0.8)';
    setTimeout(() => toggleBtn.style.transform = 'scale(1)', 100);

    toggleBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// --- 4. 3D Parallax Tilt for Gallery & Cards ---
document.querySelectorAll('.card, .gallery-item img').forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        element.style.zIndex = "100";
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        element.style.zIndex = "1";
    });
});

// --- 5. DNA Scroll Progress Tracker ---
function createDnaTracker() {
    const bar = document.createElement('div');
    bar.id = 'scroll-progress';
    document.body.appendChild(bar);
}

window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const bar = document.getElementById('scroll-progress');
    if (bar) bar.style.height = scrollPercent + "%";
});

// --- 6. Scroll Reveal Observer ---
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// --- 7. Floating Bio-Particles ---
function initParticles() {
    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.cssText = `
            position: fixed; width: 4px; height: 4px; background: #00d2ff;
            opacity: 0.2; border-radius: 50%; pointer-events: none; z-index: -1;
            left: ${Math.random() * 100}vw; top: ${Math.random() * 100}vh;
        `;
        document.body.appendChild(p);
        
        p.animate([
            { transform: 'translate(0, 0)' },
            { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)` }
        ], {
            duration: 4000 + Math.random() * 3000,
            direction: 'alternate',
            iterations: Infinity
        });
    }
}
