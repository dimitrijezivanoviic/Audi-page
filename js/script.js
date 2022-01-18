// mobile navigation

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  console.log("click");
  headerEl.classList.toggle("nav-open");
});

// prenos podataka sa forme na modal

let config_button = document.getElementById("configurate");

const editFunction = (image_src, seats_value, name_value, price_value) => {
  let image = image_src;
  let seats = seats_value;
  let name = name_value;
  let price = price_value;

  document.getElementById("modal-popup").style.display = "block";
  document.getElementById("modal-image").src = image;
  document.getElementById("modal-seats").innerHTML = seats;
  document.getElementById("modal-name").innerHTML = name;
  document.getElementById("modal-price").innerHTML = price + "€";

  var blur = document.getElementById("blur");
  blur.classList.toggle("active-class");

  var valueList = document.getElementById("modal-price");
  var checkboxes = document.querySelectorAll(".checkbox__input");
  var paragraph = document.getElementById("modal-starting");
  var number = 0;
  var replacedNumber = 0;
  replacedNumber = price.replace(".", "");
  console.log(replacedNumber);
  var gotovBroj = 0;
  gotovBroj = number.toFixed(2);
  console.log(gotovBroj);
  number = +replacedNumber;

  for (var checkbox of checkboxes) {
    checkbox.addEventListener("click", function () {
      if (this.checked == true) {
        if (this.value > 0) {
          number = number + +this.value;
          valueList.innerHTML = number.toFixed(2) + "€";
          paragraph.innerHTML = "Price is:";
        }
      } else {
        number = number - +this.value;
        console.log(number, replacedNumber);
        if (number > replacedNumber) {
          paragraph.innerHTML = "Price is:";
          valueList.innerHTML = number.toFixed(2) + "€";
        } else {
          paragraph.innerHTML = "Starting from:";
          valueList.innerHTML = price + "€";
        }
      }
    });
  }
};

// zatvaranje modala

let close_modal = document.getElementById("modal-paragraph");
let modal_container = document.getElementById("modal-popup");

close_modal.addEventListener("click", function () {
  modal_container.style.display = "none";
  var blur = document.getElementById("blur");
  blur.classList.toggle("active-class");

  //uncheck svih checboxova kada zatvorimo modal
  let allCheckboxs = document.querySelectorAll(".checkbox__input");

  allCheckboxs.forEach((checkbox) => {
    checkbox.checked = false;
  });
});

// slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
