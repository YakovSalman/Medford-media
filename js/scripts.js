// Custom Scripts


const menu = document.querySelector('.menu');
const list = document.querySelector('.nav__list');

menu.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('active');
    document.body.classList.toggle('locked');
    list.classList.toggle('active')

})


const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 27,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },


    // Responsive breakpoints
    breakpoints: {

    844: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1150: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
});


const swiperAbout = new Swiper('.swiper__about', {
  slidesPerView: 1,
  spaceBetween: 27,

  loop: true,

  pagination: {
    el: '.swiper__about-pagination',
  },


  navigation: {
    nextEl: '.swiper__about-button-next',
    prevEl: '.swiper__about-button-prev',

  },

  slideToClickedSlide: true,
  centeredSlides: true,


});

const swiperImportant = new Swiper('.swiper-important', {
  slidesPerView: 1,
  spaceBetween: 45,
  slidesPerGroup: 2,

  // Navigation arrows

  navigation: {
    nextEl: '.swiper-important-button-next',
    prevEl: '.swiper-important-button-prev',

  },


  breakpoints: {

  1125: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  }
});

// -----------modal------------------


const btnForm = document.querySelectorAll('#btn-form');
const modal = document.querySelector('.modal');
const btnClose = document.querySelectorAll('.modal-icon');
const modalBackgtound = document.querySelector('.modal__backgtound');
const btnModal = document.querySelectorAll('.btn-modal');

const btnMenu = document.querySelector('.btn-menu');

btnForm.forEach(item => {
  open(modal)
  close(btnClose, modal, modalBackgtound);

    function open(modal) {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        modalBackgtound.classList.add('active');

        modal.classList.add('active');
        document.body.classList.add('locked');
      })
    }

    function close(close, modal, backgtound) {
      close.forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          modal.classList.remove('active');
          document.body.classList.remove('locked');
          backgtound.classList.remove('active');



        })
      })

      backgtound.addEventListener('click', (e) => {
        modal.classList.remove('active');
        document.body.classList.remove('locked');
        backgtound.classList.remove('active');

      })
    }
});

// -----------submit form------------------

const formData = document.querySelector('#form-data');
const formPrice = document.querySelector('#form-price');
const formName = document.querySelector('#form-name');
const formPhone = document.querySelector('#form-phone');
const formEmail = document.querySelector('#form-email');
const errorElement = document.querySelector('.form-input-error');

const formNamePrice = document.querySelector('#form-price-name');
const formPhonePrice = document.querySelector('#form-price-phone');
const formEmailPrice = document.querySelector('#form-price-email');
const errorElementPrice = document.querySelector('.form-price-input-error');


const modalBack = document.querySelector('.modal-wrap-back');
const modalFirst = document.querySelector('.modal-wrap-first');



formData.addEventListener('submit', (e) => {
  let messages = [];

  if (formName.value === '' || formName.value == null ) {
    messages.push('введите имя');
  } else {

  }

  if (formPhone.value === '' || formPhone.value == null ) {
    messages.push('введите свой номер телефона');
  }

  if (formEmail.value === '' || formEmail.value == null ) {
    messages.push('введите email');
  }

  if (messages.length > 0) {
    e.preventDefault();

    errorElement.innerText = messages.join(', ');

  } else if (messages.length == 0) {
    modalFirst.classList.add('active');
    modalBack.classList.add('active');
  }

})

formPrice.addEventListener('submit', (e) => {
  let messages = [];

  if (formNamePrice.value === '' || formNamePrice.value == null ) {
    messages.push('введите имя');
  } else {

  }

  if (formPhonePrice.value === '' || formPhonePrice.value == null ) {
    messages.push('введите свой номер телефона');
  }

  if (formEmailPrice.value === '' || formEmailPrice.value == null ) {
    messages.push('введите email');
  }

  if (messages.length > 0) {
    e.preventDefault();

    errorElementPrice.innerText = messages.join(', ');
  }

})

const formFooter = document.querySelector('#form-footer');
const InputFooterPhone = document.querySelector('#form-footer-phone');
const formFooterError = document.querySelector('.form-footer-input-error');

formFooter.addEventListener('submit', (e) => {

  if (InputFooterPhone.value === '' || InputFooterPhone.value == null) {
    e.preventDefault();
    formFooterError.classList.add('active')
  }
});





btnMenu.addEventListener('click', (e) => {
  e.preventDefault();

  menu.classList.remove('active');
  list.classList.remove('active');
  document.body.classList.remove('locked');

})


const priceForm = document.querySelector('.price__item-form');
const priceClose = document.querySelector('.price-icon');

priceClose.addEventListener('click', () => {
  priceForm.classList.add('active');
})


const footerList = document.querySelector('.footer__list');
const footerMenu = document.querySelector('.btn__footer-menu');

footerMenu.addEventListener('click', (e) => {
  e.preventDefault();
  footerList.classList.toggle('active');
});

// -----------scroll element------------------

const navLink = document.querySelectorAll('.nav__link');
const navLinkFooter = document.querySelectorAll('.footer__link');

function scrollElement(Elementlink) {
  Elementlink.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      let href = e.target.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);

      const topOffset =  document.querySelector('.header').offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const ofsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: ofsetPosition,
        behavior: 'smooth',
      });
      menu.classList.remove('active');
      list.classList.remove('active');
      document.body.classList.remove('locked');
    });
  });
}
scrollElement(navLink);
scrollElement(navLinkFooter)



// -----------fixed header------------------


const intro = document.querySelector('.intro');
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

  let scrolPos = window.scrollY;
  let introHeight = intro.scrollHeight;


  if(scrolPos > introHeight) {
    header.classList.add('header__fixed');
  } else {
    header.classList.remove('header__fixed');
  }

})



// -----------scroll up------------------

const logo = document.querySelectorAll('#logo');

logo.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  });
});

