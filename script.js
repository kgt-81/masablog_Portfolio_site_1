'use strict';
const menu_link = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < menu_link.length; i++) {
  menu_link[i].addEventListener('click',function(e){
    e.preventDefault();
    let href = menu_link[i].getAttribute('href');
    let target = document.getElementById(href.replace('#', ''));
    const rect = target.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const position = rect + offset;
    hamburger_menu.classList.remove('active');
    header_nav.classList.remove('show');
    window.scrollTo({
      top: position,
      behavior: "smooth"
    });
  });

}

const hamburger_menu = document.getElementById('menu');
const header_nav = document.getElementById('header-nav');

hamburger_menu.addEventListener('click',function(e){
  e.preventDefault();
  if (this.classList.contains('active')) {
    this.classList.remove('active');
    header_nav.classList.remove('show');
  } else {
    this.classList.add('active');
    header_nav.classList.add('show');
  }
});

window.addEventListener('resize',function(){
  let width = this.document.body.clientWidth;
  if(width>=753){
    hamburger_menu.classList.remove('active');
    header_nav.classList.remove('show');
  }
});