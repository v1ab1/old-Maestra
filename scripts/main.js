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