"use strict";


let contactBubble = document.querySelector(".profile-seller__contact-bubble");
let dropdownUl = document.querySelector(".profile-seller__contact-dropdown ul");


contactBubble.addEventListener("click", ()=>{
    dropdownUl.classList.toggle("slidedown");
})