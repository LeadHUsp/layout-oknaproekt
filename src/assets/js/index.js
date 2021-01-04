import './sliders_conf';
import ZoomPopUp from './zoom-image-config';
import lozad from 'lozad';

/* import './slider_react/index'; */

document.addEventListener('DOMContentLoaded', () => {
  //nav-bar show and hide
  const menuTogglerEl = document.getElementById('nav-bar-btn');
  const mainNavBarEl = document.getElementById('main-nav-bar');
  const menuCloseBtnEl = document.getElementById('navbar-btn-close');
  const navbarLayerEl = document.querySelector('.nav-bar-layer');
  menuTogglerEl.addEventListener('click', (e) => {
    mainNavBarEl.classList.add('navbar-active');
    navbarLayerEl.style.visibility = 'visible';
    e.stopPropagation();
  });
  const navBarHide = () => {
    mainNavBarEl.classList.remove('navbar-active');
    navbarLayerEl.style.visibility = 'hidden';
  };
  navbarLayerEl.addEventListener('click', navBarHide);
  menuCloseBtnEl.addEventListener('click', navBarHide);
  /* select field change  */
  const selectToggleEl = document.querySelectorAll('.city-change__select');
  /* const optionListEl = selectToggleEl.querySelector('.city-change__list'); */

  selectToggleEl.forEach((elem) => {
    elem.addEventListener('click', () => {
      elem
        .querySelector('.city-change__list')
        .classList.toggle('city-change__list-active');
    });
  });

  /*   document.addEventListener('click', (e) => {
    if (e.target !== selectToggleEl) {
      optionListEl.classList.remove('city-change__list-active');
    }
  }); */

  //navbar animation
  function animateShow(animatedEl, question) {
    if (question) {
      animatedEl.style.cssText = ` max-height: ${animatedEl.scrollHeight}px; margin-top: 22px;`;
    } else {
      animatedEl.style.cssText = ` max-height: ${animatedEl.scrollHeight}px;`;
    }
  }
  function animateHide(animatedEl, question) {
    if (question) {
      animatedEl.style.cssText = ` max-height:0px; margin-top: 0;`;
    } else {
      animatedEl.style.maxHeight = `0`;
    }
  }
  function animationOnClick(animatedEl, event) {
    if (animatedEl.clientHeight == 0) {
      animateShow(animatedEl);
    } else {
      if (event.target !== animatedEl && !animatedEl.contains(event.target)) {
        animateHide(animatedEl);
      }
    }
  }
  const navbarListItemEl = document.querySelectorAll('.navbar-list__item-submenu');
  navbarListItemEl.forEach((elem) => {
    let subNavList = elem.querySelector('.subnav-list');
    elem.addEventListener('mouseover', () => {
      animateShow(subNavList);
    });
    elem.addEventListener('mouseout', () => {
      animateHide(subNavList);
    });
    elem.addEventListener('click', (event) => {
      animationOnClick(subNavList, event);
    });
  });

  //tabs
  let tab = (
    controlSelector,
    contentSelector,
    controlActiveClass,
    contentActiveClass
  ) => {
    const tabControl = document.querySelectorAll(controlSelector);
    const tabContent = document.querySelectorAll(contentSelector);
    let tabName;
    tabControl.forEach((item) => {
      item.addEventListener('click', selectNavTab);
    });

    function selectNavTab() {
      tabControl.forEach((tab) => {
        tab.classList.remove(controlActiveClass);
      });
      this.classList.add(controlActiveClass);
      tabName = this.getAttribute('data-tab');
      selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
      tabContent.forEach((item) => {
        item.getAttribute('data-tab-content') == tabName
          ? item.classList.add(contentActiveClass)
          : item.classList.remove(contentActiveClass);
      });
    }
  };
  tab(
    '#prices-tabs .tab-control__btn',
    '#prices-tabs .product-cards__wrapper',
    'tab-control__btn-active',
    'product-cards__wrapper-active'
  );
  tab(
    '#profile-tabs .tab-control__btn',
    '#profile-tabs .profile-tab',
    'tab-control__btn-active-secondary',
    'profile-tab-active'
  );

  //question block animation

  const questionEl = document.querySelectorAll('.question__item');
  const questionAnimation = (animatedEl, iconEl, event) => {
    if (animatedEl.clientHeight == 0) {
      iconEl.innerText = '-';
      iconEl.style.cssText = 'background: #37A58C; color: #ffffff; ';

      animateShow(animatedEl, true);
    } else {
      if (event.target !== animatedEl) {
        iconEl.innerText = '+';
        iconEl.style.cssText = 'background: #E5E5E5; color: #c1c1c1; ';
        animateHide(animatedEl, true);
      }
    }
  };
  questionEl.forEach((elem) => {
    let questionBodyEl = elem.querySelector('.question__body');
    let questionIconEl = elem.querySelector('.question__icon');
    elem.addEventListener('click', (event) => {
      questionAnimation(questionBodyEl, questionIconEl, event);
    });
  });

  //popup init
  let popup = new ZoomPopUp('.zoom-image');
  popup.init();

  //lazyload images plugin init
  const el = document.querySelectorAll('.lozad');
  const observer = lozad(el);
  observer.observe();

  //footer nav submenu show-hide
  const linkWithSubMenuEl = document.querySelectorAll('.footer-nav__submenu');
  linkWithSubMenuEl.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      let submenuEl = elem.querySelector('.submenu');
      if (submenuEl.style.visibility === 'hidden') {
        submenuEl.style.cssText = 'visibility: visible; opacity: 1;';
      } else {
        submenuEl.style.cssText = 'visibility: hidden; opacity: 0;';
      }
    });
  });
});
