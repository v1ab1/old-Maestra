'use strict';

const DropDown = document.getElementById('dropdown'),
    DropDownIcon1 = document.getElementById('dropdown_icon1'),
    DropDownIcon2 = document.getElementById('dropdown_icon2');

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
    } else {
        callbackButton.style.display = "none";
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
    } else {
        callbackDone.style.display = "none";
    }
}

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function showSlides(n) {
    let i;
    let b;
    let slides = document.getElementsByClassName("slide");
    let slidesImages = document.getElementsByClassName("slide-pic");

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
    console.log(slideIndex);
    for (i = 0; i < slidesImages.length; i++) {
        console.log(slideIndex);
        if ((slideIndex-1) != i) {
            slidesImages[i].style.scale = '1';
            slidesImages[i].style.transitionDelay = '500ms';
        }
    }
    slidesImages[slideIndex-1].style.transitionDelay = 'unset';    
    slidesImages[slideIndex-1].style.scale = '1.4';
}