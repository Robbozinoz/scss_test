// JavaScript Document
var acc = document.getElementsByClassName("moreinfo");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        'use strict';
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    };
}

//var div = document.getElementById('logo');
//var opacity = 1;
//var fader = setInterval(function() {
//  'use strict';
//opacity -= 0.02; //Decrease the opacity
//if (opacity >= 0.10) { //Stop at negative numbers
//  if (typeof div.style.opacity == 'string') {
//    div.style.opacity = opacity;
//} else {
//  div.style.filters = 'alpha(opacity=' + (opacity * 100) +
//    ')';
//}
//} else { //Stop timer!
//  clearInterval(fader);
//}
//}, 100); //Every 100 milliiseconds