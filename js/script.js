/* HAMBURGER MENU */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if(hamburger){

hamburger.addEventListener("click", () => {

navMenu.classList.toggle("active");

if(hamburger.innerHTML === "☰"){
hamburger.innerHTML = "✖";
}else{
hamburger.innerHTML = "☰";
}

});

}