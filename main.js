const input = document.getElementById("action__input_1");

const toggleMenu = (event) => {
  const menu = document.getElementById("action__menu_1");
  menu.classList.toggle("hidden");
};

input.addEventListener("click", toggleMenu);
