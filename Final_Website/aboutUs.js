document.addEventListener("DOMContentLoaded", function () {
    const arrowButton = document.getElementById("arrowButton");
    const verticalMenu = document.getElementById("verticalMenu");
    const hamMenuIcon = document.getElementById("hamMenuicon");
    const hamMenuLinks = document.getElementById("hamMenulinks");
    const hamMenuIcon2 = document.getElementById("hamMenuicon2");
    const scrollMeup = document.getElementById("mobvershowButton");
    const scrollMedown = document.getElementById("mobvercloseButton");
    const nextButton = document.getElementById("arrowLeft");
    const prevButton = document.getElementById("arrowRight");
    const productText = document.getElementById("productNum");
    const salesText = document.getElementById("salesNum");
    const yearText = document.getElementById("yearNum");


    if (arrowButton && verticalMenu) {
        arrowButton.addEventListener("click", function () {
            verticalMenu.classList.toggle("open");
            arrowButton.classList.toggle("reverse");
        });
    }

    if (hamMenuIcon && hamMenuLinks && hamMenuIcon2) {
        hamMenuIcon.addEventListener("click", function () {
            hamMenuLinks.classList.add("open");
            hamMenuLinks.classList.remove("close");
        });

        hamMenuIcon2.addEventListener("click", function () {
            hamMenuLinks.classList.add("close");
            hamMenuLinks.classList.remove("open");
        });
    }

    if (scrollMeup && scrollMedown && verticalMenu) {
        scrollMeup.addEventListener("click", function () {
            verticalMenu.classList.add("open");
            verticalMenu.classList.remove("close");

        });

        scrollMedown.addEventListener("click", function () {
            verticalMenu.classList.add("close");
            verticalMenu.classList.remove("open");
        })
    }

    let slideIndex = 1;
    const container = document.getElementById("container");
    const slideItems = container.querySelectorAll(".slideshow");
    const divArray = Array.from(slideItems);

    const dotContainer = document.getElementById("dot-container");
    const dotItems = dotContainer.querySelectorAll(".fas.fa-circle");
    const dotArray = Array.from(dotItems);

    function showSlide(n) {
        if (n > divArray.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = divArray.length;
        }
        divArray.forEach(slide => slide.style.display = "none");
        divArray[slideIndex - 1].style.display = "block";


    }

    function showDot(n) {
        if (n > dotArray.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = dotArray.length;
        }
        dotArray.forEach(dot => dot.style.color = "#000000");
        dotArray[slideIndex - 1].style.color = "#717744";
    }

    function nextSlide() {
        showSlide(slideIndex += 1);
        showDot(slideIndex += 1)
    }

    function prevSlide() {
        showSlide(slideIndex -= 1);
        showDot(slideIndex -= 1)
    }


    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    showSlide(slideIndex);
    showDot(slideIndex)


    let productNum = 0;
    const maxProduct = 100;
    let salesNum = 0;
    const maxSales = 2000;
    let yearNum = 0;
    const maxYear = 3;


    function updateNumber(current, max, element) {
        if (current < max) {
            current = current + 10;
            element.textContent = `${current}+`; 
        }
        return current;
    }

    function runNumbers() {
        productNum = updateNumber(productNum, maxProduct, productText);
        salesNum = updateNumber(salesNum, maxSales, salesText);
        yearNum = updateNumber(yearNum, maxYear, yearText);
    }

    setInterval(runNumbers, 30);

});














