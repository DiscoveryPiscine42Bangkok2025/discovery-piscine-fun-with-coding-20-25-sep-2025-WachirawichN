const navBar = document.getElementById("navBarBox");
const projectContainer = document.getElementById("experienceBox");
const projectArr = [
    projectContainer.querySelector("#project1"),
    projectContainer.querySelector("#project2"),
    projectContainer.querySelector("#project3"),
    projectContainer.querySelector("#project4")
];

// Nav Bar Event
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

navBar.querySelector("h1").addEventListener("click", function() {
    window.location.href = "../home/home.html"
});
navBar.querySelector("#profileLink").addEventListener("mouseenter", navBarButtonMouseEnter);
navBar.querySelector("#profileLink").addEventListener("mouseleave", navBarButtonMouseLeave);
navBar.querySelector("#experienceLink").addEventListener("mouseenter", navBarButtonMouseEnter);
navBar.querySelector("#experienceLink").addEventListener("mouseleave", navBarButtonMouseLeave);
navBar.querySelector("#contactLink").addEventListener("mouseenter", navBarButtonMouseEnter);
navBar.querySelector("#contactLink").addEventListener("mouseleave", navBarButtonMouseLeave);

// Experience Box Event
function changeProject(event) {
    for (let i = 0; i < projectArr.length; i++) {
        projectArr[i].style.display = "none";
    }

    const idx = Math.round((parseInt(event.target.getBoundingClientRect().left) - 112.5) / 100);
    projectArr[idx].style.display = "block";
}
projectContainer.querySelector("#projectSelection").querySelector("#pro1SelBox").addEventListener("click", changeProject)
projectContainer.querySelector("#projectSelection").querySelector("#pro2SelBox").addEventListener("click", changeProject)
projectContainer.querySelector("#projectSelection").querySelector("#pro3SelBox").addEventListener("click", changeProject)
projectContainer.querySelector("#projectSelection").querySelector("#pro4SelBox").addEventListener("click", changeProject)

// Window Resize Event
window.addEventListener("resize", (event) => {
    navBarVisibility(document.documentElement.clientWidth >= 760)
});

// Initialization
navBarVisibility(document.documentElement.clientWidth >= 760)