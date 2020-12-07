(() => {
  const button = document.querySelector(".js-main-navigation__mobile-button");
  const menu = document.querySelector(".js-main-navigation__menu");
  const toggleClass = () => {
    menu.classList.toggle("main-navigation__menu--open");
  };
  if (button) {
    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
  }
})();
