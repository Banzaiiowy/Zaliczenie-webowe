var social = document.querySelector(".socials");

social.addEventListener("mouseover", function(){
    social.style.left= "0px";
}, false)

social.addEventListener("mouseout", function(){
    social.style.left= "-160px";
}, false)