//const navTop = document.querySelector('.navbar-top');
//const bottomNavbar = document.querySelector('.navbar-bottom');
//const topOfBottomNav = bottomNavbar.offsetTop;


// will run checkSlide every 20ms so checkSlide is not running constantly
function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

// function topNavTransition() {
//  if (window.scrollY = 0) {
//    navTop.classList.remove('navtop-hide');
//  } else {
//    navTop.classList.add('navtop-hide');
//  }
// }

// window.addEventListener('scroll', debounce(topNavTransition));

// function fixedBottomNav() {

//  if (window.scrollY >= topOfBottomNav) {
//     document.body.style.paddingTop = bottomNavbar.offsetHeight + 'px';
//    document.body.classList.add('bottom-nav-fixed');

//     bottomNavbar.style.display = 'fixed';
    
//  } else {
//     document.body.style.paddingTop = 0;
//    document.body.classList.remove('bottom-nav-fixed');
    
//     bottomNavbar.style.display = 'relative';
//  }
// }

// window.addEventListener('scroll', fixedBottomNav);
const nav = document.querySelector('.navbar');
const mobileNavIcon = document.querySelector('#menu-icon');
const mobileNavList = document.querySelector('#mobile-nav');
const closeMenu = document.querySelector('#close-menu');

function changeMobileNav() {
  if (nav.style.display != "none") {
    mobileNavIcon.style.display = "none";
    nav.style.display = "none";
    mobileNavList.style.display = "block";
  } else {
    mobileNavIcon.style.display = "inline-block";
    nav.style.display = "grid";
    mobileNavList.style.display = "none";
  }
}
mobileNavIcon.addEventListener('click', changeMobileNav);
closeMenu.addEventListener('click', changeMobileNav);






function stickyElement(e) {
  
  var header = document.querySelector('.header');
  var headerHeight = getComputedStyle(header).height.split('px')[0];
  var navbar = document.querySelector('.navbar-top');  
  var scrollValue = window.scrollY + 45;
  
  if (scrollValue > headerHeight) {
    navbar.classList.add('nav-sticky-v2');
    
  } else if (scrollValue < headerHeight) {
    navbar.classList.remove('nav-sticky-v2');
    
  }
}
  window.addEventListener('scroll', stickyElement);