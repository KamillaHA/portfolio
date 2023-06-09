// find knappen
let mybutton = document.getElementById("myBtn");

// når bruger scroller over 20px ned på siden
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// når bruger klikker og skal til toppen igen
function topFunction() {
    document.body.scrollTop = 0; //til safari
    document.documentElement.scrollTop = 0; // til chrome og firefox
}