const nav_height = document.getElementById("nav_bar").offsetHeight;
const magazine = document.getElementById("showmagazine").getBoundingClientRect().top + window.pageYOffset;
const first_expln = document.getElementById("first_expln").getBoundingClientRect().top + window.pageYOffset;
const second_expln = document.getElementById("second_expln").getBoundingClientRect().top + window.pageYOffset;
const list = document.getElementById("second_expln").getElementsByTagName("li");
let nav_list = document.getElementById("nav_bar").getElementsByTagName("li");

const sections = [first_expln, second_expln, magazine];
const articles = ["first_artcl", "second_artcl", "magazine_cards"];
const scroll_to = {"what": sections[0], "which": sections[1], "since": sections[2]};

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function nav_click(clicked_id) {
    let j = 0;
    while ( j < nav_list.length) {
        nav_list[j++].className = "nav_btn";
    }
    document.getElementById(clicked_id).className = "nav_btn_active";
    window.scrollTo({top: scroll_to[clicked_id] - nav_height - 20, left: 0, behavior: "smooth"});
}

function opacity_changer() {
    const trigger = 100;
    var posY = window.scrollY;
    for (var i = 0; i < sections.length; i++) {
        var elm = document.getElementById(articles[i]);
        elm.style.opacity = "0%";
        if (posY < sections[0] - trigger - nav_height) {
            let k = 0;
            while (k < nav_list.length) {
                nav_list[k++].className = "nav_btn"
            }
        }
        if (posY >= sections[i] - trigger - nav_height) {
            elm.style.transition = "0.2s ease-out 0s";
            elm.style.opacity = "95%";
            let k = 0;
            while (k < nav_list.length) {
                nav_list[k++].className = "nav_btn"
            }
            document.getElementById(getKeyByValue(scroll_to, sections[i])).className = "nav_btn_active";
            if (articles[i] === "first_artcl") {
                continue;
            } else if (articles[i] === "second_artcl") {
                for (var j = 0; j < list.length; j++) {
                    list[j].style.transition = "0.3s ease-out " + (j*0.5).toString() + "s";
                    list[j].style.opacity = "95%";
                    list[j].style.marginLeft = "50%"
                    continue;
                }
            } else if (articles[i] === "magazine_cards") { //opacity 100%인 요소들
                elm.style.opacity = "100%";
                continue;
            }
            continue;
        }
    }
}

window.addEventListener("scroll", opacity_changer);