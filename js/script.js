// const navbar = document.getElementsByTagName('nav')[0];

// window.addEventListener('scroll', function () {
//   console.log (window.scrollY);
//   if (window.scrollY > 1) {
//     navbar.classlist.replace('bg-transparent', 'scrolling-active');
    
//   }else if (this.window.scrollY <= 0) {
//     navbar.classList.replace('scrolling-active' , 'bg-transarent');
//   }
  
// });

const navBar = document.querySelector(".navbar");
window.addEventListener('scroll', () => {
    const windowPosition = window.scrollY > 5;
    navBar.classList.toggle ("Scrolling-active", windowPosition);

});