document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-theme");
    const body = document.body;

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("light");
        toggleButton.textContent = body.classList.contains("light") ? "🌞" : "🌙";
    });
});