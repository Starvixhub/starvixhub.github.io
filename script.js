const progress = 78;
const bar = document.getElementById("progressBar");
const value = document.getElementById("progressValue");
const toggle = document.getElementById("themeToggle");

window.addEventListener("load", () => {
  requestAnimationFrame(() => {
    bar.style.width = `${progress}%`;
  });
});

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "☾" : "☼";
});

document.querySelectorAll('.nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});
