const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const links = document.querySelectorAll(".nav-list li a");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
});

// Function Scroll

const elemento = document.querySelector('#header');
const aElements = document.getElementsByTagName('a');

function manejarScroll() {
  if (window.scrollY >= 100) {
    elemento.classList.add('scrolled');
    for (let a of aElements) {
      a.classList.add('scrolled');
    }
  } else {
    elemento.classList.remove('scrolled');
    for (let a of aElements) {
      a.classList.remove('scrolled');
    }
  }
}

window.addEventListener('scroll', manejarScroll);

// Funcion popup para los label

function showPopup(videoUrl) {
  var popup = document.getElementById('popupContainer');
  var popupVideo = document.getElementById('popupVideo');
  
  popupVideo.src = videoUrl; 
  
  popup.style.display = 'block'; 
}

function closePopup() {
  var popup = document.getElementById('popupContainer');
  var popupVideo = document.getElementById('popupVideo');
  
  popupVideo.src = '';
  
  popup.style.display = 'none';
}

// Reveal 

function reveal() {
  var windowHeight = jQuery(window).height();
  var elementVisible = 150;
  var elementTop;
  var positionYscroll = window.pageYOffset;
  var position;

  jQuery(".reveal").each(function() {
    elementTop = jQuery(this).offset().top;
    positionYscroll = window.pageYOffset;
    position = positionYscroll + windowHeight - elementVisible;
    if (elementTop < position) {
      jQuery(this).addClass("active");
    } else {
      jQuery(this).removeClass("active");
    }
  });
}
jQuery(window).scroll(reveal);
setTimeout(reveal, 100);

// Activar Swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: "cards",
  loopAddBlankSlides: false,
  
  // If we need pagination
  pagination: {
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
  },
});
