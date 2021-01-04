import { Swiper, Navigation, Pagination, EffectFade, Thumbs, EffectFlip } from 'swiper';

Swiper.use([Navigation, EffectFade, EffectFlip, Thumbs, Pagination]);
let configuratorBgSlider = new Swiper('.configurator__bg-slider', {
  effect: 'fade',
  loop: true,

  noSwiping: true,
});
document.getElementById('change-bg').addEventListener('click', () => {
  configuratorBgSlider.slideNext();
});
let laminationThumb = new Swiper('.lamination-thumb', {
  wrapperClass: 'lamination-thumb__slides',
  slideClass: 'lamination-thumb__slide',
  slidesPerView: 4,
  spaceBetween: 10,

  navigation: {
    nextEl: '#lamination-next',
    prevEl: '#lamination-prev',
  },
  breakpoints: {
    991: {
      slidesPerView: 5,
    },
    599: {
      slidesPerView: 4,
    },
    340: {
      slidesPerView: 3,
    },
  },
});
let laminationProfile = new Swiper('.lamination-view__wrapper', {
  wrapperClass: 'lamination-view__profiles',
  slideClass: 'lamination-view__slide',
  effect: 'fade',
  slidesPerView: 1,
  thumbs: {
    swiper: laminationThumb,
  },
});
let handleView = new Swiper('.handle-view', {
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    nextEl: '#handle-view-next',
    prevEl: '#handle-view-prev',
  },
  breakpoints: {
    991: {
      slidesPerView: 4,
    },
    599: {
      slidesPerView: 3,
    },
    340: {
      slidesPerView: 2,
    },
  },
});
let windowHandleThumb = new Swiper('#window-handle__thumb', {
  slidesPerView: 8,
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',
  spaceBetween: 5,

  allowSlideNext: false,
  allowSlidePrev: false,
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerColumn: 5,
      slidesPerColumnFill: 'row',
      spaceBetween: 5,
    },
    600: {
      slidesPerView: 8,
      slidesPerColumn: 2,
    },
    340: {
      slidesPerView: 5,
      slidesPerColumn: 2,
      allowSlideNext: true,
      allowSlidePrev: true,
    },
  },
});
let windowHandleView = new Swiper('.handle-view__wrapper', {
  slidesPerView: 1,
  effect: 'fade',
  thumbs: {
    swiper: windowHandleThumb,
  },
});
const changeFillWidth = (index, total) => {
  const barEl = document.getElementById('rounded-slider-bar');
  let fillWidth = 500 + (index * 1 + 1) * (500 / total);
  barEl.setAttribute('stroke-dashoffset', fillWidth);
};
let roundedSlider = new Swiper('#rounded-slider-main', {
  effect: 'flip',
  pagination: {
    el: '.rounded-slider__pages',
    type: 'fraction',
    currentClass: 'rounded-slider__page-active',
    totalClass: 'rounded-slider__page-total',
  },
  navigation: {
    nextEl: '#rounded-slider-next',
    prevEl: '#rounded-slider-prev',
  },
  on: {
    init: function () {
      changeFillWidth(this.activeIndex, this.slides.length);
    },
    slideNextTransitionStart: function () {
      changeFillWidth(this.activeIndex, this.slides.length);
    },
    slidePrevTransitionStart: function () {
      changeFillWidth(this.activeIndex, this.slides.length);
    },
  },
});
let roundedSliderThumb = new Swiper('#rounded-slider-thumb', {
  navigation: {
    nextEl: '#rounded-slider-next',
    prevEl: '#rounded-slider-prev',
  },
});
let certificateThumb = new Swiper('#certificate-thumb', {
  slidesPerView: 4,
  spaceBetween: 15,
  navigation: {
    nextEl: '#certificate-next',
    prevEl: '#certificate-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
    441: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
});
let certificateMain = new Swiper('#certificate-main', {
  effect: 'fade',
  pagination: {
    el: '.certificate__pages',
    type: 'fraction',
    currentClass: 'certificate__page-current',
    totalClass: 'certificate__page-total',
  },
  thumbs: {
    swiper: certificateThumb,
  },
});
