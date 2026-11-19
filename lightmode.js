document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-theme");
    const body = document.body;
    const menuButton = document.getElementById("menu-toggle");
    const navigation = document.querySelector("nav");
    const navigationLinks = document.querySelectorAll("#primary-navigation a");

    const updateThemeButton = () => {
        const isLight = body.classList.contains("light");
        toggleButton.textContent = isLight ? "🌞" : "🌙";
        toggleButton.setAttribute("aria-label", isLight ? "Ativar tema escuro" : "Ativar tema claro");
        toggleButton.title = isLight ? "Ativar tema escuro" : "Ativar tema claro";
    };

    updateThemeButton();
    toggleButton.addEventListener("click", () => {
        body.classList.toggle("light");
        updateThemeButton();
    });

    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("menu-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    navigationLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("menu-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Abrir menu");
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navigation.classList.contains("menu-open")) {
            navigation.classList.remove("menu-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Abrir menu");
            menuButton.focus();
        }
    });
});