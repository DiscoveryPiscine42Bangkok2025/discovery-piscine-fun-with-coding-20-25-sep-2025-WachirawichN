const navBar = document.getElementById("navBarBox");

function navBarVisibility(state) {
    if (state == 1) {
        navBar.querySelector("#profileLink").style.display = "block";
        navBar.querySelector("#experienceLink").style.display = "block";
        navBar.querySelector("#contactLink").style.display = "block";
    } else {
        navBar.querySelector("#profileLink").style.display = "none";
        navBar.querySelector("#experienceLink").style.display = "none";
        navBar.querySelector("#contactLink").style.display = "none";
    }
}
function navBarButtonMouseEnter(event) {
    event.target.style.color = "white";
}
function navBarButtonMouseLeave(event) {
    event.target.style.color = "rgb(152, 152, 152)";
}

// Nav Bar Event
navBar.querySelector("h1").addEventListener("click", function() {
    window.location.href = "../home/home.html"
});
navBar.querySelector("#profileLink").addEventListener("mouseenter", navBarButtonMouseEnter);
navBar.querySelector("#profileLink").addEventListener("mouseleave", navBarButtonMouseLeave);
navBar.querySelector("#experienceLink").addEventListener("mouseenter", navBarButtonMouseEnter);
navBar.querySelector("#experienceLink").addEventListener("mouseleave", navBarButtonMouseLeave);
navBar.querySelector("#contactLink").addEventListener("mouseenter", navBarButtonMouseEnter);
navBar.querySelector("#contactLink").addEventListener("mouseleave", navBarButtonMouseLeave);

// Window Resize Event
window.addEventListener("resize", (event) => {
    navBarVisibility(document.documentElement.clientWidth >= 760)
});

// Initialization
navBarVisibility(document.documentElement.clientWidth >= 760)