const menu = document.querySelector(".header-mobile_menu");
const cross = document.querySelector(".header-mobile_cross");
const modalWindow1 = document.querySelector(".mobile-menu-modal-geo");
const modalWindow2 = document.querySelector(".mobile-menu-modal-contact");
const modalWindow3 = document.querySelector(".mobile-menu-modal-burger");

const body = document.body;
const arrayModals = [
  ,
  document.querySelector(".mobile-menu-modal-geo"),
  document.querySelector(".mobile-menu-modal-contact"),
  document.querySelector(".mobile-menu-modal-burger"),
];
const menuButtons = document.querySelectorAll(".menu-button");

menuButtons.forEach((elem) => {
  elem.addEventListener("click", () => {
    // add/delete active circle
    menuButtons.forEach((e) => {
      if (e.id != elem.id) {
        e.classList.remove("mobile-menu-active");
      }
    });
    elem.classList.toggle(`mobile-menu-active`);

    // open\close different modals
    arrayModals.forEach((e, i) => {
      if (i != elem.id) {
        e.classList.remove(`show-modal`);
      }
    });

    arrayModals[elem.id].classList.toggle(`show-modal`);

    if (arrayModals[elem.id].classList.value.includes(`show-modal`)) {
      body.classList.add("OH");
    } else {
      body.classList.remove("OH");
    }
  });
});

// menu.addEventListener("click", () => {
//   cross.style.display = "flex";
//   menu.style.display = "none";
//   modalWindow.classList.toggle("show-modal");
// });
// cross.addEventListener("click", () => {
//   cross.style.display = "none";
//   menu.style.display = "flex";
//   modalWindow.classList.toggle("show-modal");
// });

function onToggle(event) {
  if (event.target.open) {
    document.querySelectorAll("details[open]").forEach((el) => {
      if (el === event.target) {
        return;
      }

      el.open = false;
    });
  }
}

document
  .querySelectorAll("details")
  .forEach((el) => el.addEventListener("toggle", onToggle));
