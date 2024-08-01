document.addEventListener("DOMContentLoaded", function() {
    const arrowButton = document.getElementById("arrowButton");
    const verticalMenu = document.getElementById("verticalMenu");
    const hamMenuIcon = document.getElementById("hamMenuicon");
    const hamMenuLinks = document.getElementById("hamMenulinks");
    const hamMenuIcon2 = document.getElementById("hamMenuicon2");
    const scrollMeup = document.getElementById("mobvershowButton");
    const scrollMedown = document.getElementById("mobvercloseButton");

    if (arrowButton && verticalMenu) {
        arrowButton.addEventListener("click", function() {
            verticalMenu.classList.toggle("open");
            arrowButton.classList.toggle("reverse");
        });
    }

    if (hamMenuIcon && hamMenuLinks && hamMenuIcon2) {
        hamMenuIcon.addEventListener("click", function() {
            hamMenuLinks.classList.add("open");
            hamMenuLinks.classList.remove("close");
        });

        hamMenuIcon2.addEventListener("click", function() {
            hamMenuLinks.classList.add("close");
            hamMenuLinks.classList.remove("open");
        });
    }
    
    if (scrollMeup && scrollMedown && verticalMenu) {
        scrollMeup.addEventListener("click", function() {
            verticalMenu.classList.add("open");
            verticalMenu.classList.remove("close");
            
        });

        scrollMedown.addEventListener("click", function() {
            verticalMenu.classList.add("close");
            verticalMenu.classList.remove("open");
        })
    }




});