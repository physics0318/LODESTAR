var magazine = document.getElementById("showmagazine").getBoundingClientRect().top;

var scroll_to = {"what": magazine, "which": magazine, "since": magazine};

function nav_click(clicked_id) {
    window.scrollTo({top: scroll_to[clicked_id], left: 0, behavior: "smooth"});
}