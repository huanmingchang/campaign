const input = document.getElementById("action__input_1");
const darkModeToggle = document.getElementById("dark__mode__toggle");

const toggleMenu = (event) => {
  const menu = document.getElementById("action__menu_1");
  menu.classList.toggle("hidden");
};

const darkModeToggleHandler = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};

input.addEventListener("click", toggleMenu);
darkModeToggle.addEventListener("change", darkModeToggleHandler);
