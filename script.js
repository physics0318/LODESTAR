const nav_height = document.getElementById("nav_bar").offsetHeight;

var magazine = document.getElementById("showmagazine").getBoundingClientRect().top;
var first_expln = document.getElementById("first_expln").getBoundingClientRect().top;
var second_expln = document.getElementById("second_expln").getBoundingClientRect().top;
var sections = [first_expln, second_expln, magazine];
var articles = ["first_artcl", "second_artcl", "magazine_cards"];

var scroll_to = {"what": sections[0], "which": sections[1], "since": sections[2]};

function nav_click(clicked_id) {
    window.scrollTo({top: scroll_to[clicked_id] - nav_height - 20, left: 0, behavior: "smooth"});
}


document.addEventListener("scroll", () => {
    const trigger = 50;
    var posY = window.scrollY;
    for (var i = 0; i < sections.length; i++) {
        var elm = document.getElementById(articles[i]);
        if (posY >= sections[i] - trigger - nav_height) {
            elm.style.transition = "opacity 0.3s linear 0s";
            elm.style.opacity = "95%";
            if (articles[i] === "magazine_cards") { //opacity 100%인 요소들
                elm.style.opacity = "100%";
            }
        } else{
            elm.style.opacity = "0%";
        }
    }
})