const body = document.body;
const arrayModals = [
  ,
  document.querySelector(".mobile-menu-modal-geo"),
  document.querySelector(".mobile-menu-modal-contact"),
  document.querySelector(".mobile-menu-modal-burger"),
];
const menuButtons = document.querySelectorAll(".menu-button");

const showContentLocation = document.querySelector(".datails-content-location");
const showContentLanguage = document.querySelector(".datails-content-language");
const showContryOrLang = document.querySelectorAll(".datails-content");
const btnCity = document.querySelector(".details-city");
const btnLang = document.querySelector(".details-language");

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

btnCity.addEventListener("click", () => {
  closeAllDetails();
  showContentLanguage.classList.remove("show-content");
  showContentLocation.classList.toggle("show-content");
});
btnLang.addEventListener("click", () => {
  closeAllDetails();
  showContentLocation.classList.remove("show-content");
  showContentLanguage.classList.toggle("show-content");
});

function changeWindow(element) {
  closeAllDetails();
  
}

function closeAllDetails() {
  document.querySelectorAll("details[open]").forEach((el) => {
    el.open = false;
  });
}

function onToggle(event) {
  if (event.target.open) {
    document.querySelectorAll("details[open]").forEach((el) => {
      if (el === event.target) {
        return;
      }
      el.open = false;
    });
  }

  if (document.querySelectorAll("details[open]").length > 0) {
    showContryOrLang.forEach((e) => e.classList.remove("show-content"));
  }
}
document.querySelectorAll("details").forEach((el) => {
  el.addEventListener("toggle", onToggle);
});
