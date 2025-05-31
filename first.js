const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");
const pauseBtn = document.getElementById("pauseBtn");
let current = 0;
let paused = false;

function createDots() {
    slides.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => showSlide(i));
        dotsContainer.appendChild(dot);
    });
}

function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[current].classList.add("active");
}

function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    current = index;
    slides[current].classList.add("active");
    updateDots();
}

function nextSlide() {
    if (!paused) {
        current = (current + 1) % slides.length;
        showSlide(current);
    }
}

function togglePause() {
    paused = !paused;
    pauseBtn.textContent = paused ? "▶" : "⏸";
}

pauseBtn.addEventListener("click", togglePause);
createDots();
setInterval(nextSlide, 4000);