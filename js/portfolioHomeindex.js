
// Sticky header feature - shows hero first, then scroll to stick header.
window.onscroll = function() {myFunction()};
    
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


