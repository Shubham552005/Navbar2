let hambuger = document.querySelector("#hamburger");
let nav2 = document.querySelector("#nav-2");
let ham1 = document.querySelector("#ham-1");
let ham2 = document.querySelector("#ham-2");
let ham3 = document.querySelector("#ham-3");

function toggleHamburger(bool){
    if(bool){
        hamburger.style.gap = "3px";
        ham2.style.display = "block";
        ham1.style.transform = "translateY(0px) rotate(0deg)";
        ham3.style.transform = "translateY(0px) rotate(0deg)";
    } else {
        hamburger.style.gap = "0";
        ham2.style.display = "none";
        ham1.style.transform = "translateY(1.5px) rotate(45deg)";
        ham3.style.transform = "translateY(-1.5px) rotate(-45deg)";
    }
}

hamburger.addEventListener("click", ()=>{
    nav2.classList.toggle("nav-2-visible");
    if(hamburger.classList.contains("ham-on")){
        toggleHamburger(false);
        hamburger.classList.remove("ham-on");
    } else{
        toggleHamburger(true);
        hamburger.classList.add("ham-on");
    }
});
