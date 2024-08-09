function toggleMenu() {
  const menu = document.querySelector(".menu-link");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openLinkInNewTab(url) {
  window.open(url, '_blank');
}
