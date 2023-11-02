const swiper = new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const menuList = document.querySelector('.menu');

const accordion = () => {
  let accordion = document.getElementsByClassName('components');
  console.log(accordion);
  if ((accordion && accordion.length === 0) || !accordion) {
    return;
  }
  accordion[0].classList.add('active');
  accordion[0].nextElementSibling.style.display = 'block';

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
      for (let i = 0; i < accordion.length; i++) {
        accordion[i].classList.remove('active');
        accordion[i].nextElementSibling.style.display = 'none';
      }
      this.classList.toggle('active');
      let info = this.nextElementSibling;
      if (info.style.display === 'block') {
        info.style.display = 'none';
      } else {
        info.style.display = 'block';
      }
    });
  }
};
accordion();

const menuBurger = () => {
  const burger = document.getElementsByClassName('menu-burger');
  const absMenuBurger = document.getElementById('abs-menu');
  for (let i = 0; i < burger.length; i++) {
    burger[i].addEventListener('click', function () {
      menuList.classList.add('active');
    });
  }
  absMenuBurger.addEventListener('click',() => {
    menuList.classList.add('active');
  })
};

menuBurger();

const menuBack = () => {
  const burger = document.getElementsByClassName('button-back');
  for (let i = 0; i < burger.length; i++) {
    burger[i].addEventListener('click', function () {
      menuList.classList.remove('active');
    });
  }
}

menuBack();

// Можно использовать везде самое важное использовать блок questions
const tabs = () => {
  const question = document.querySelectorAll('.questions > .question');
  question.forEach(item => {
    item.addEventListener('click', e => {
      item.firstElementChild.lastElementChild.lastElementChild.classList.toggle('active')
      item.lastElementChild.classList.toggle('active')
    })
  })
}

tabs();

const logicHref = () => {
  const anchors = document.querySelectorAll('a.ancla[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const blockID = anchor.getAttribute('href').substr(1)
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}

logicHref()

const menuAbsolute = (pYOffsetFix) => {
  const absMenu = document.getElementById('abs-menu')
  window.addEventListener('scroll', e => {
    if (document.documentElement.clientWidth > 1200) {
      absMenu.classList.remove('active')
      return;
    }
    if (pageYOffset > pYOffsetFix) {
      absMenu.classList.add('active')
    } else {
      absMenu.classList.remove('active')
    }
  })
}

menuAbsolute(600)