const glow = document.querySelector("body::before");

document.addEventListener("mousemove", (e) => {
    document.body.style.setProperty('--x', e.clientX + 'px');
    document.body.style.setProperty('--y', e.clientY + 'px');
});
