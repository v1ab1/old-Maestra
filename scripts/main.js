'use strict';

const DropDown = document.getElementById('dropdown'),
    DropDownIcon1 = document.getElementById('dropdown_icon1'),
    DropDownIcon2 = document.getElementById('dropdown_icon2'),
    allBody = document.getElementById("all_body");


function openDropDown() {
    if (DropDown.style.display == "block") {
        DropDown.style.display = "none";
        DropDownIcon2.style.display = "none";
        DropDownIcon1.style.display = "block";
    } else {
        DropDown.style.display = "block";
        DropDownIcon1.style.display = "none";
        DropDownIcon2.style.display = "block";
    }
}

const callbackButton = document.getElementById('callback_wrapper');

function openCallback() {
    if (callbackButton.style.display == "none") {
        callbackButton.style.display = "block";
        allBody.style.overflow = 'hidden';
    } else {
        callbackButton.style.display = "none";
        allBody.style.overflow = 'unset';
    }
}

const callbackName = document.getElementById('cbk-name'),
    callbackPhone = document.getElementById('cbk-phone');

function callbackError() {
    if (callbackName.value == '') {
        callbackName.style.borderBottom = '2px solid red';
    }
    if (callbackPhone.value == '') {
        callbackPhone.style.borderBottom = '2px solid red';
    }
    if (callbackName.value != '' && callbackName.value != '') {
        openCallback();
        closeCallback();
    } 
}

const callbackDone = document.getElementById('callback_done');

function closeCallback() {
    if (callbackDone.style.display == "none") {
        callbackDone.style.display = "block";
        allBody.style.overflow = 'hidden';
    } else {
        callbackDone.style.display = "none";
        allBody.style.overflow = 'unset';
    }
}

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    clearInterval(timer);
    slideIndex += n;
    showSlides(slideIndex);
    makeTimer();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

let slidesImages = document.getElementsByClassName("slide-pic");

function changeImage() {
    if (window.innerWidth >= 1024) {
        slidesImages[0].src = './media/slider1.png';
        slidesImages[1].src = './media/slider2.jpg';
        slidesImages[2].src = './media/slider3.jpg';
        slidesImages[3].src = './media/slider4.jpg';
        slidesImages[4].src = './media/slider5.jpg';
        slidesImages[5].src = './media/slider6.jpg';
        slidesImages[6].src = './media/slider7.jpg';
        slidesImages[7].src = './media/slider8.jpeg';
    }
}

changeImage();

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let slidesImages = document.getElementsByClassName("slide-pic");
    let sliderMenu = document.getElementsByClassName("slider-menu");
    let sliderMenuText = document.getElementsByClassName("slider-menu");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = '0';
    }
    slides[slideIndex-1].style.opacity = '1';
    for (i = 0; i < slidesImages.length; i++) {
        if ((slideIndex-1) != i) {
            slidesImages[i].style.scale = '1';
            slidesImages[i].style.transitionDelay = '500ms';
        }
    }
    for (i = 0; i < sliderMenu.length; i++) {
        sliderMenu[i].className = sliderMenu[i].className.replace(" active-slider-nav", "");
        sliderMenuText[i].style.color = 'white';
    }
    slidesImages[slideIndex-1].style.transitionDelay = 'unset';    
    slidesImages[slideIndex-1].style.scale = '1.4';
    sliderMenu[slideIndex-1].className += " active-slider-nav";
    sliderMenuText[slideIndex-1].style.color = '#DCAA72';
}

let timer = 0;

function makeTimer(){
    clearInterval(timer);
    timer = setInterval(function(){
      slideIndex++;
      showSlides(slideIndex);
    },6500);
  }

makeTimer();

let scrollElement = document.getElementsByClassName('history-scroll');

function progressBar(){
    let i;
    for (i = 0; i < scrollElement.length; i++) {
        scrollElement[i].style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    }
    scrollElement[0].style.backgroundColor = '#DCAA72';
    if (document.getElementById('history_wrapper').scrollLeft >= 150) {
        scrollElement[1].style.backgroundColor = '#DCAA72';
    }
    if (document.getElementById('history_wrapper').scrollLeft >= 460) {
        scrollElement[2].style.backgroundColor = '#DCAA72';
    }
    if (document.getElementById('history_wrapper').scrollLeft >= 800) {
        scrollElement[3].style.backgroundColor = '#DCAA72';
    }
}

function setScroll(xScroll){
    document.getElementById('history_wrapper').scrollLeft = xScroll;
}

let PortfolioIndex = 1;

showPortfolio(PortfolioIndex);

function plusPortfolio(n) {
    PortfolioIndex += n;
    showPortfolio(PortfolioIndex);
}

function currentPortfolio(n) {
    showPortfolio(PortfolioIndex = n);
}

function showPortfolio(n) {
    let i;
    let slides = document.getElementsByClassName("portfolio-item");
    let sliderMenu = document.getElementsByClassName("portfolio-nav-bar");

    if (n > slides.length) {
        PortfolioIndex = 1;
    }
    if (n < 1) {
        PortfolioIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[PortfolioIndex-1].style.display = 'flex';
    for (i = 0; i < sliderMenu.length; i++) {
        sliderMenu[i].className = sliderMenu[i].className.replace(" active-port", "");
    }
    sliderMenu[PortfolioIndex-1].className += " active-port";
}

const mainMenu = document.getElementById("main_menu"),
    menuContent = document.getElementsByClassName("item-content");

function showItem(number) {
    mainMenu.style.display = 'flex';
    menuContent[number].style.display = 'flex';
    allBody.style.overflow = 'hidden';
}
function closeItem(number) {
    mainMenu.style.display = 'none';
    menuContent[number].style.display = 'none';
    allBody.style.overflow = 'unset';
}

const categories = document.getElementsByClassName("adresses-category"),
    adressHead = document.getElementsByClassName("adress-head"),
    map = document.getElementsByClassName("map"),
    office = document.getElementsByClassName("office"),
    cityLine = document.getElementsByClassName("active-city-line");

function selectCategory(n) {
    let i;
    for (i = 0; i < categories.length; i++) {
        if (n == i) {
            categories[i].style.display = 'block';
            adressHead[i].style.opacity = '1';
        } else {
            categories[i].style.display = 'none';
            adressHead[i].style.opacity = '0.5';
        }
    }
}
function selectMap(n) {
    let i;
    for (i = 0; i < map.length; i++) {
        if (n == i) {
            map[i].style.display = 'block';
            office[i].className += " active-city";
            cityLine[i].style.opacity = "1";
        } else {
            map[i].style.display = 'none';
            office[i].className = office[i].className.replace(" active-city", "");
            cityLine[i].style.opacity = "0";
        }
    }
}
