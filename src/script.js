document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('htb');
    const hamburgerMenu = document.getElementById('hamburger_menu');
    const close_menu_icon = document.getElementById('close_menu_icon')
    const heroSection = document.querySelector(".hero")


    toggleButton.addEventListener('click', () => {
        toggleButton.style.display = "none";
        close_menu_icon.style.display = "block"
        heroSection.style.filter = 'blur(1.5px)'  //to blur the background
        hamburgerMenu.classList.add('hamburger_open');
        hamburgerMenu.style.display = "block"
    });

    close_menu_icon.addEventListener("click", () => {
        close_menu_icon.style.display = "none";
        toggleButton.style.display = "block";
        heroSection.style.filter = 'none'
        hamburgerMenu.classList.remove('hamburger_open');
        hamburgerMenu.style.display = "none";

    })
});