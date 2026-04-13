const text = "Pharmacy Student • Healthcare Innovator • Tech Enthusiast";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}

window.onload = typing;
