// =========================
// Loader & Skill Bars
// =========================
window.onload = () => {
    document.getElementById("loader").style.display = "none";
    document.querySelectorAll(".bar div").forEach(bar => {
        setTimeout(() => {
            bar.style.width = bar.dataset.level + "%";
        }, 500);
    });
};

// =========================
// Mobile Menu Toggle
// =========================
document.getElementById("menuBtn").onclick = () => {
    document.getElementById("navMenu").classList.toggle("show");
};

// =========================
// Typing Effect
// =========================
const typingTexts = ["Deepak Nautiyal", "Web Developer", "Python Learner", "Future Hacker"];
let typeIndex = 0, charIndex = 0;
function typingEffect() {
    const target = document.getElementById("typing");
    if (charIndex < typingTexts[typeIndex].length) {
        target.innerHTML += typingTexts[typeIndex][charIndex];
        charIndex++;
        setTimeout(typingEffect, 120);
    } else {
        setTimeout(() => {
            target.innerHTML = "";
            charIndex = 0;
            typeIndex = (typeIndex + 1) % typingTexts.length;
            typingEffect();
        }, 2000);
    }
}
typingEffect();

// =========================
// Starry Background
// =========================
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = "-1";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

const stars = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.5,
    speed: Math.random() * 0.3 + 0.1
}));

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,255,0.8)";
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
    });
    requestAnimationFrame(animateStars);
}
animateStars();

// =========================
// Mouse Glow / Cursor Trail
// =========================
const trail = [];
const maxTrail = 15;

document.addEventListener("mousemove", e => {
    trail.push({ x: e.clientX, y: e.clientY, alpha: 1 });
    if (trail.length > maxTrail) trail.shift();
});

function drawTrail() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => { // draw stars too
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,255,0.8)";
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
    });

    trail.forEach((dot, i) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, (maxTrail - i), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${dot.alpha})`;
        ctx.fill();
        dot.alpha -= 0.03;
    });

    requestAnimationFrame(drawTrail);
}
drawTrail();

// =========================
// Scroll Reveal for Sections
// =========================
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0px)";
            sec.style.transition = "all 0.8s ease-out";
        } else {
            sec.style.opacity = 0;
            sec.style.transform = "translateY(50px)";
        }
    });
});
