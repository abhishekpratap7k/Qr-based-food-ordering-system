const navbarToggle = document.getElementById("navbar-toggle");
const navbarLeft = document.getElementById("navbar-left");
const navbarRight = document.getElementById("navbar-right");

navbarToggle.addEventListener("click", () => {
    navbarLeft.classList.toggle("active");
    navbarRight.classList.toggle("active");
});

function logout(){
    sessionStorage.removeItem("useremail");
    sessionStorage.removeItem("loggedIn");
}