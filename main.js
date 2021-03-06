// SHOW MENU
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//validate menu if constant exist
if(navToggle)
{
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu");
    });
}
//hide menu
if(navClose)
{
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu");
    });
}
//on clicking the menu item the menu will close

const navLink = document.querySelectorAll(".nav_link");

function linkAction(){
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}

navLink.forEach(n=>n.addEventListener("click",linkAction));