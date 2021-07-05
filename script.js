const nav_height = document.getElementById("nav_bar").offsetHeight;
const magazine = document.getElementById("showmagazine").getBoundingClientRect().top;
const first_expln = document.getElementById("first_expln").getBoundingClientRect().top;
const second_expln = document.getElementById("second_expln").getBoundingClientRect().top;
const list = document.getElementById("second_expln").getElementsByTagName("li");

const sections = [first_expln, second_expln, magazine];
const articles = ["first_artcl", "second_artcl", "magazine_cards"];
const scroll_to = {"what": sections[0], "which": sections[1], "since": sections[2]};

function nav_click(clicked_id) {
    window.scrollTo({top: scroll_to[clicked_id] - nav_height - 20, left: 0, behavior: "smooth"});
}

function list_opacity(delay) {
    for (var j = 0; j < list.length; j++) {
        list[j].style.transition = "0.3s linear " + (j*delay).toString() + "s";
        list[j].style.opacity = "95%"
    }
}

function opacity_changer() {
    const trigger = 100;
    var posY = window.scrollY;
    for (var i = 0; i < sections.length; i++) {
        var elm = document.getElementById(articles[i]);
        if (posY >= sections[i] - trigger - nav_height) {
            elm.style.transition = "0.2s ease-out 0s";
            elm.style.opacity = "95%";
            if (articles[i] === "second_artcl") {
                list_opacity(0.5);
            } else if (articles[i] === "magazine_cards") { //opacity 100%인 요소들
                elm.style.opacity = "100%";
            }
            continue;
        } 
        elm.style.opacity = "0%";
    }
}

window.addEventListener("scroll", opacity_changer);