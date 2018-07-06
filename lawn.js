const navTop = document.querySelector('.navbar-top');
const bottomNavbar = document.querySelector('.navbar-bottom');
const topOfBottomNav = bottomNavbar.offsetTop;


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
// 	if (window.scrollY = 0) {
// 		navTop.classList.remove('navtop-hide');
// 	} else {
// 		navTop.classList.add('navtop-hide');
// 	}
// }

// window.addEventListener('scroll', debounce(topNavTransition));

function fixedBottomNav() {

  console.log(topOfBottomNav);
  console.log(window.scrollY);

	if (window.scrollY >= topOfBottomNav) {
    document.body.style.paddingTop = bottomNavbar.offsetHeight + 'px';
		document.body.classList.add('bottom-nav-fixed');
	} else {
    document.body.style.paddingTop = 0;
		document.body.classList.remove('bottom-nav-fixed');
	}
}

window.addEventListener('scroll', fixedBottomNav);