const jaiBox = document.getElementById("jaiBox");
const champBox = document.getElementById("champBox");

function mouseEnterBox(event)
{
    const image = event.target.querySelector("img");
    const overlay = event.target.querySelector(".colorOverlay");
    const nameText = event.target.querySelector(".nameTitle");

    image.style.opacity = "100%";
    overlay.style.opacity = "50%";
    nameText.style.opacity = "100%";
}
function mouseLeaveBox(event)
{
    const image = event.target.querySelector("img");
    const overlay = event.target.querySelector(".colorOverlay");
    const nameText = event.target.querySelector(".nameTitle");
    
    image.style.opacity = "20%";
    overlay.style.opacity = "10%";
    nameText.style.opacity = "0%";
}

jaiBox.addEventListener("click", function() {
    window.location.href = "../wnamgird/wnamgird.html"
});
jaiBox.addEventListener("mouseenter", mouseEnterBox);
jaiBox.addEventListener("mouseleave", mouseLeaveBox);

champBox.addEventListener("click", function() {
    window.location.href = "../csuwanpi/csuwanpi.html"
});
champBox.addEventListener("mouseenter", mouseEnterBox);
champBox.addEventListener("mouseleave", mouseLeaveBox);