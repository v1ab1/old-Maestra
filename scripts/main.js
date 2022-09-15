'use strict';

var DropDown = document.getElementById('dropdown');
var DropDownButton = document.getElementById('menu_bar');

function openDropDown() {
    console.log('dasdakdsa');
    if (DropDown.style.display == "block") {
        DropDown.style.display = "none";
    } else {
        DropDown.style.display = "block";
    }
}
// window.onclick = function (event) {
//     if (!event.target.matches('DropDownButton')) {
//         document.getElementById('dropdown')
//             .style.display = "none";
//     }
// };