let nav_height = document.getElementById("nav_bar").offsetHeight;
let magazine = document.getElementById("showmagazine").getBoundingClientRect().top + window.pageYOffset;

let first_expln = document.getElementById("first_expln").getBoundingClientRect().top + window.pageYOffset;

let second = document.getElementById("second_expln");
let second_expln = second.getBoundingClientRect().top + window.pageYOffset;
let list = second.getElementsByTagName("li");

let nav_list = document.getElementById("nav_bar").getElementsByTagName("li");
let menu_icon = document.getElementById("menu_icon");

const sections = [first_expln, second_expln, magazine];
const articles = ["first_artcl", "second_artcl", "magazine_cards"];
const scroll_to = {"what": sections[0], "which": sections[1], "since": sections[2]};

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function nav_click(clicked_id) {
    let j = 1;
    while ( j < nav_list.length) {
        nav_list[j++].className = "nav_btn";
    }
    document.getElementById(clicked_id).className = "nav_btn_active";
    window.scrollTo({top: scroll_to[clicked_id] - nav_height - 20, left: 0, behavior: "smooth"});
}

function opacity_changer() {
    const trigger = 100;
    var posY = window.scrollY;
    for (let i = 0; i < sections.length; i++) {
        var elm = document.getElementById(articles[i]);
        elm.style.opacity = "0%";
        if (posY < sections[0] - trigger - nav_height) {
            let k = 0;
            while (k < nav_list.length) {
                nav_list[k++].className = "nav_btn";
            }
        }
        if (posY >= sections[i] - trigger - nav_height) {
            elm.style.transition = "0.2s ease-out 0s";
            elm.style.opacity = "95%";
            
            for (let k = 0; k < nav_list.length; k++) {
                nav_list[k].className = "nav_btn";
            }
            document.getElementById(getKeyByValue(scroll_to, sections[i])).className = "nav_btn_active";
            
            switch(articles[i]) {
                case "first_artcl":
                    break;
                case "second_artcl":
                    for (let j = 0; j < list.length; j++) {
                        list[j].style.transition = "0.3s ease-out " + (j*0.5).toString() + "s";
                        list[j].style.opacity = "95%";
                        if (window.width >= "568px") {
                            list[j].style.marginLeft = "15%";
                        }
                    }
                    break;
                case "magazine_cards":
                    elm.style.opacity = "100%";
                    break;
            }
        }
    }
}

function toggle_menu() {
    document.querySelector("#nav_bar ul").style.transition = "0.3s";
    if (menu_icon.className === "icon") {
        document.querySelector("#nav_bar ul").style.width = "max-content";
        document.querySelector("#nav_bar ul").style.right = "3rem";
        document.querySelector("#nav_bar ul").style.opacity = "100%";
        
        menu_icon.className = "icon_toggle";
    } else {
        document.querySelector("#nav_bar ul").style.width = "max-content";
        document.querySelector("#nav_bar ul").style.right = "0";
        document.querySelector("#nav_bar ul").style.opacity = "0%";
        
        menu_icon.className = "icon";
    }
}
window.addEventListener("scroll", opacity_changer);
menu_icon.addEventListener("click", toggle_menu);