var magazine = document.getElementById("showmagazine").getBoundingClientRect().top;
var first_expln = document.getElementById("first_expln").getBoundingClientRect().top;
var second_expln = document.getElementById("second_expln").getBoundingClientRect().top;

var scroll_to = {"what": first_expln, "which": second_expln, "since": magazine};

function nav_click(clicked_id) {
    window.scrollTo({top: scroll_to[clicked_id], left: 0, behavior: "smooth"});
}

// var trigger = 20;

// document.addEventListener("scroll", () => {
//     const posY = window.scrollY;
    
//     if (posY >= second_expln) {

//     }
// })