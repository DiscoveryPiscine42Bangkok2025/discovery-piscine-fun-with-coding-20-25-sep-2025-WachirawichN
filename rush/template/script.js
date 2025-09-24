const navBar = document.getElementById("navBarBox");
const dropDown = document.getElementById("dropDownBox");
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
        navBar.querySelector("#dropDownLink").style.display = "none";

        navBar.querySelector("#profileLink").style.display = "block";
        navBar.querySelector("#experienceLink").style.display = "block";
        navBar.querySelector("#contactLink").style.display = "block";

        dropDown.style.top = "-75px";
    } else {
        navBar.querySelector("#dropDownLink").style.display = "block";
        
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
function dropDownFlipping() {
    if (dropDown.getBoundingClientRect().top != 75) {
        dropDown.style.top = "75px";
    } else {
        dropDown.style.top = "-75px";
    }
}

navBar.querySelector("h1").addEventListener("click", function() {
    window.location.href = "../home/home.html"
});
navBar.querySelector("#dropDownLink").addEventListener("click", dropDownFlipping);
navBar.querySelector("#dropDownLink").addEventListener("mouseenter", navBarButtonMouseEnter);
navBar.querySelector("#dropDownLink").addEventListener("mouseleave", navBarButtonMouseLeave);

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

    const decoratorBar = projectContainer.querySelector("#projectSelection").querySelector("#decorateBar");
    const idx = Math.round((parseInt(event.target.getBoundingClientRect().left) - 112.5) / 100);
    projectArr[idx].style.display = "block";
    decoratorBar.style.left = idx * 100 + 112.5 + "px";
}
projectContainer.querySelector("#projectSelection").querySelector("#pro1SelBox").addEventListener("click", changeProject)
projectContainer.querySelector("#projectSelection").querySelector("#pro2SelBox").addEventListener("click", changeProject)
projectContainer.querySelector("#projectSelection").querySelector("#pro3SelBox").addEventListener("click", changeProject)
projectContainer.querySelector("#projectSelection").querySelector("#pro4SelBox").addEventListener("click", changeProject)

// Window Event
function adjustTextSize(baseSize) {
    const winWidth = document.documentElement.clientWidth;
    if (winWidth >= 1500) {
        return baseSize - 2;
    }
    else if (winWidth >= 1100) {
        return baseSize - 4;
    }
    else if (winWidth >= 900) {
        return baseSize - 4;
    }
    else if (winWidth >= 600) {
        return baseSize -8;
    }
}
window.addEventListener("resize", (event) => {
    navBarVisibility(document.documentElement.clientWidth >= 760)
});
window.addEventListener("scroll", (event) => {
    dropDown.style.top = "-75px";
});

// Initialization
navBarVisibility(document.documentElement.clientWidth >= 760);