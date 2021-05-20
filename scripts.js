document.onreadystatechange = function(){
    if (document.readyState !== "complete"){
        document.querySelector("body").style.visibility = "hidden";
    }else{
        document.querySelector("body").style.visibility = "visible";
    }
}

document.getElementById("warrenButton").addEventListener("click", function(event){
    location.href = "#warren";
    event.preventDefault();
});
document.getElementById("aboutButton").addEventListener("click", function(event){
    location.href = "#about";
    event.preventDefault();
});

document.getElementById("skillsButton").addEventListener("click", function(event){
    location.href = "#skills";
    event.preventDefault();
});

document.getElementById("contactButton").addEventListener("click", function(event){
    location.href = "#contact";
    event.preventDefault();
});


window.onscroll = function(){myFunction()};

var buttonContainer = document.getElementById("buttonContainer");
var justStick = buttonContainer.offsetTop;

function myFunction(){
    if (window.pageYOffset >= justStick){
        buttonContainer.classList.add("justStick")
    } else {
        buttonContainer.classList.remove("justStick");
    }
}