
// STICKY HEADER feature - shows hero first, then scroll to stick header.
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




// Not currently active - need to reactivate HTML for this to work 
// MODAL when you click Explore button in the About section of my homepage 
// Get the modal
// var modal = document.getElementById("modalSOL");

// // Get the button that opens the modal
// var btn = document.getElementById("SOLbutton");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// //   modal.style.display = "#modalSOL"; 
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }



// Not currently active - need to reactivate HTML for this to work 
// MODAL when  you click Submit button in the Connect section of my homepage 
// Get the modal
var modal = document.getElementById("modalConnect");

// Get the button that opens the modal
var btn = document.getElementById("connectButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
//   modal.style.display = "#modalConnect";  ???
//   modal.style.display = "block"; this was the original code but not working - probably because I changed the names?
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

