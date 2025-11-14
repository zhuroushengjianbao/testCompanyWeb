function showHome(){
    document.getElementById("home").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("applicationCenter").style.display = "none";
    document.getElementById("industryApplication").style.display = "none";
    document.getElementById("newsEvents").style.display = "none";
    document.getElementById("contact").style.display = "none";
}

function showAbout(){
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("applicationCenter").style.display = "none";
    document.getElementById("industryApplication").style.display = "none";
    document.getElementById("newsEvents").style.display = "none";
    document.getElementById("contact").style.display = "none";
} 

function showApplicationCenter(){
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("applicationCenter").style.display = "block";
    document.getElementById("industryApplication").style.display = "none";
    document.getElementById("newsEvents").style.display = "none";
    document.getElementById("contact").style.display = "none";
}

function showIndustryApplication(){
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("applicationCenter").style.display = "none";
    document.getElementById("industryApplication").style.display = "block";
    document.getElementById("newsEvents").style.display = "none";
    document.getElementById("contact").style.display = "none";
}

function showNewsEvents(){
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("applicationCenter").style.display = "none";
    document.getElementById("industryApplication").style.display = "none";
    document.getElementById("newsEvents").style.display = "block";
    document.getElementById("contact").style.display = "none";

}

function showContact(){
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("applicationCenter").style.display = "none";
    document.getElementById("industryApplication").style.display = "none";
    document.getElementById("newsEvents").style.display = "none";
    document.getElementById("contact").style.display = "block";

}

window.onload = function() {
    showHome();
}