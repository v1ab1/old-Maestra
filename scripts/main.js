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