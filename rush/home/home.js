const jaiBox = document.getElementById("jaiBox");
const champBox = document.getElementById("champBox");
const loadBox = document.getElementById("loadBox");

let currentBox = 1;

function mouseIn() {
    jaiBox.querySelector("button").style.backgroundColor = "rgba(119, 181, 27, 1)";
}
function mouseOut() {
    jaiBox.querySelector("button").style.backgroundColor = "rgb(109, 168, 19)";
}

jaiBox.querySelector("button").addEventListener("click", function() {
    console.log("Nigga");
    window.location.href = "../wnamgird/wnamgird.html"
});
jaiBox.querySelector("button").addEventListener("mouseenter", mouseIn);
jaiBox.querySelector("button").addEventListener("mouseleave", mouseOut);

champBox.querySelector("button").addEventListener("click", function() {
    window.location.href = "../csuwanpi/csuwanpi.html"
});
champBox.querySelector("button").addEventListener("mouseenter", mouseIn);
champBox.querySelector("button").addEventListener("mouseleave", mouseOut);

function loadBarSwitch() {
    console.log(currentBox);
    if (currentBox == 0) {
        jaiBox.style.opacity = "0%";
        jaiBox.style.zIndex = 0;
        champBox.style.opacity = "100%";
        champBox.style.zIndex = 1;

        loadBox.querySelector("#jaiLoadBox").querySelector(".runBar").style.transition = "width 0s linear";
        loadBox.querySelector("#jaiLoadBox").querySelector(".runBar").style.opacity = "0%";
        loadBox.querySelector("#jaiLoadBox").querySelector(".runBar").style.width = "0%";
        
        loadBox.querySelector("#champLoadBox").querySelector(".runBar").style.transition = "width 10s linear";
        loadBox.querySelector("#champLoadBox").querySelector(".runBar").style.opacity = "100%";
        loadBox.querySelector("#champLoadBox").querySelector(".runBar").style.width = "100%";
        
        currentBox = 1;
    }
    else {
        jaiBox.style.opacity = "100%";
        jaiBox.style.zIndex = 1;
        champBox.style.opacity = "0%";
        champBox.style.zIndex = 0;

        loadBox.querySelector("#jaiLoadBox").querySelector(".runBar").style.transition = "width 10s linear";
        loadBox.querySelector("#jaiLoadBox").querySelector(".runBar").style.opacity = "100%";
        loadBox.querySelector("#jaiLoadBox").querySelector(".runBar").style.width = "100%";
        
        loadBox.querySelector("#champLoadBox").querySelector(".runBar").style.transition = "width 0s linear";
        loadBox.querySelector("#champLoadBox").querySelector(".runBar").style.opacity = "0%";
        loadBox.querySelector("#champLoadBox").querySelector(".runBar").style.width = "0%";
        
        currentBox = 0;
    }
}

loadBox.querySelector("#jaiLoadBox").querySelector(".hitBox").addEventListener("click", loadBarSwitch);
loadBox.querySelector("#jaiLoadBox").querySelector(".runBar").addEventListener("transitionend", loadBarSwitch);
loadBox.querySelector("#champLoadBox").querySelector(".hitBox").addEventListener("click", loadBarSwitch);
loadBox.querySelector("#champLoadBox").querySelector(".runBar").addEventListener("transitionend", loadBarSwitch);

document.addEventListener("DOMContentLoaded", loadBarSwitch);