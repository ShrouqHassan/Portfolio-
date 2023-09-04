 var sticky = document.getElementsByClassName("sticky")[0];
window.addEventListener('scroll',()=>{
    var scroll = window.scrollY;
    if (scroll>=50){
        sticky.classList.add("sticky-added");
    }
    else{
        sticky.classList.remove("sticky-added");
    }
})

var typed = new Typed('.element', {
    strings: ["Shrouk Hassan", "a Software Engineer"],
    smartBackspace:true,
    typeSpeed: 60,
    backSpeed:60,
    loop:true,
    loopCount:Infinity,
    startDelay:1000
  });