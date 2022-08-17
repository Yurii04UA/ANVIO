const arrayModals = [
  document.querySelector(".mobile-menu-modal-geo"),
  document.querySelector(".mobile-menu-modal-contact"),
  document.querySelector(".mobile-menu-modal-burger"),
];
const arrayMenu=[
  document.querySelector(".mobile-menu-modal-geo_wrapper"),
  document.querySelector(".mobile-menu-modal-contact_wrapper"),
  document.querySelector(".mobile-menu-modal-burger_wrapper"),
]
const menuButtons = document.querySelectorAll(".menu-button");

const showContentLocation = document.querySelector(".datails-content-location");
const showContentLanguage = document.querySelector(".datails-content-language");
const showContryOrLang = document.querySelectorAll(".datails-content");
const btnCity = document.querySelector(".details-city");
const btnLang = document.querySelector(".details-language");

//modal fourth section
const btnPrice = document.querySelector(".btn-price");
const btnClose= document.querySelector('.btn-close')
const modalWindowPrice = document.querySelector(".fourth-section_modal");
btnPrice.addEventListener("click", () => {
  modalWindowPrice.classList.add("fourth-sectio-show-modal");
});
btnClose.addEventListener('click',() => {
  modalWindowPrice.classList.remove("fourth-sectio-show-modal");
})



// active circle of mobile menu
menuButtons.forEach((elem) => {
  elem.addEventListener("click", () => {
    // add/delete active circle
    menuButtons.forEach((button) => {
      if (button.id != elem.id) {
        button.classList.remove("mobile-menu-active");
      }
    });
    elem.classList.toggle(`mobile-menu-active`);

    // open\close different modals
    arrayModals.forEach((e, i) => {
      if (i != elem.id) {
        e.classList.remove(`show-modal`);
      }
    });
    arrayMenu.forEach((e, i) => {
      if (i != elem.id) {
        e.classList.remove(`show-modal`);
      }
    });

    arrayModals[elem.id].classList.toggle(`show-modal`);

    if (arrayModals[elem.id].classList.value.includes(`show-modal`)) {
      body.classList.add("oh");
    } else {
      body.classList.remove("oh");

    if(arrayModals[elem.id].classList.value.includes('show-modal')){
      arrayMenu[elem.id].classList.add(`show-modal`)
    }else{
      arrayMenu[elem.id].classList.remove(`show-modal`)

    }
    
    
  });
});

// show city and lang menu
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



function closeAllDetails() {
  document.querySelectorAll("details[open]").forEach((el) => {
    el.open = false;
  });
}

// close all windows when open other menu
function onToggle(event) {
  if (event.target.open) {
    document.querySelectorAll("details[open]").forEach((el) => {
      if (el === event.target) {
        return;
      }
      el.open = false;
    });
  }

  if (document.querySelectorAll("details[open]").length) {
    showContryOrLang.forEach((e) => e.classList.remove("show-content"));
  }
}
document.querySelectorAll("details").forEach((el) => {
  el.addEventListener("toggle", onToggle);
});

/// slider

$(".slider").slick({
  dots: true,
  initialSlide: 1,
});


