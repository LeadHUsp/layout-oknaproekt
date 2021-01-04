export default class ZoomPopUp {
  constructor(selector) {
    this.selector = document.querySelectorAll(selector);
    this.body = document.getElementsByTagName('body')[0];
    this.head = document.getElementsByTagName('head')[0];
    this.popupLayer = document.getElementById('zoom-popup');
    this.popUpImage = document.getElementById('zoom-image');
  }
  init() {
    this.selector.forEach((elem) => {
      elem.addEventListener('click', () => {
        let src = elem.getAttribute('zoom-src');
        this.showPopUp(src);
      });
    });

    let styleForModal = `
    <style type="text/css">
      #zoom-popup {
        transition: all 0.4s ease;
        left:0;
        top:0;
        position: fixed;
        z-index: 9999;
        display: flex;     
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.219);
        visibility: hidden;
        opacity: 0;
      }
      #zoom-image {
  
      }
  </style>`;
    this.head.insertAdjacentHTML('beforeend', styleForModal);
    let width = null;
    if (window.innerWidth < 768) {
      width = window.innerWidth * 0.8;
    } else if (window.innerWidth < 1200) {
      width = window.innerWidth / 2;
    } else {
      width = window.innerWidth / 4;
    }
    this.body.insertAdjacentHTML(
      'beforeend',
      ` <div id="zoom-popup">
          <img id="zoom-image" style=" width: ${width}px"  src=""/>
        </div>`
    );

    document.getElementById('zoom-popup').addEventListener('click', this.closePopUp);
  }
  showPopUp(targetSrc) {
    document.getElementById('zoom-image').setAttribute('src', targetSrc);
    document.getElementById('zoom-popup').style.cssText =
      'visibility: visible; opacity: 1;';
  }
  closePopUp() {
    document.getElementById('zoom-popup').style.cssText =
      'visibility: hidden; opacity: 0;';
  }
}
