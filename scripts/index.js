// HAMBURGER MENU
const check = document.getElementById("checkbox");
const menu = document.getElementById("menu");

// resets hamburger
window.addEventListener('load', () => {check.checked = false;});
// checks for window resize 
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1200) {
    menu.style.display = "none";
    check.checked = false;
    menu.classList.remove("menu-shown");
    document.body.style.overflow = "scroll";
  }
});

check.addEventListener('click', () => {
  menu.classList.toggle("menu-shown");
  if (check.checked) {
    menu.style.display = "block";
    menu.style.opacity = 1;
    document.body.style.overflow = "hidden";
  } else {
    window.setTimeout(() => {
      menu.style.opacity = 0;
      menu.style.display = "none";
      document.body.style.overflow = "scroll";
    }, 280);
  }
});

// hides nav bar on scroll
// var lastScrollTop;
// // Tracks scroll on page
// window.addEventListener('scroll', () => {
//   // tracks scroll position
//   var scrollTop = window.pageYOffset;
//   document.documentElement.scrollTop;
//   if (scrollTop > lastScrollTop) {
//     nav[0].style.top = '-80px';
//   } else {
//     nav[0].style.top='0';
//   }
//   lastScrollTop = scrollTop;
// });

// // Navigation functionality
// const toggleNav = () => {
//   // Checks what value is and sets it to opposite
//   document.body.dataset.nav = document.body.dataset.nav == "true" ? "false" : "true";
// }