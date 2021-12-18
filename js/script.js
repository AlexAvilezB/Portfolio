//script para mensaje de alerta de la seccion proyectos

const open = document.getElementById("open");
const modalc = document.getElementById("modalc");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modalc.classList.add("show");
});

close.addEventListener("click", () => {
  modalc.classList.remove("show");
});

//script volver arriba

document.getElementById("button").addEventListener("click", scrollUp);

function scrollUp() {
  var currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.scrollTo(0, 0);
  }
}

buttonUp = document.getElementById("button");

window.onscroll = function () {
  var scroll = document.documentElement.scrollTop;

  if (scroll > 400) {
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 400) {
    buttonUp.style.transform = "scale(0)";
  }
};
