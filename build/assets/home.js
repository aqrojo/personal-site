// --------------------------------
// menu intersection
const intersectionOptions = { rootMargin: '100px 0px 0px' };
const intersectionTrigger = document.querySelector('#projects');
const menu = document.querySelector('#nav');

function intersectionCallback(entries, observer) {
  if (entries[0].isIntersecting) {
    menu.classList.add('solid-header');
  } else {
    menu.classList.remove('solid-header');
  }
}

const observer = new IntersectionObserver(intersectionCallback, intersectionOptions);
observer.observe(intersectionTrigger);

// --------------------------------
// contact button
const contactTag = document.getElementById('contact');

function goToContact() {
  contactTag.scrollIntoView();
}

// --------------------------------
// projects view
// const mySwiper = new Swiper('.swiper-container', {
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: 3,
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
