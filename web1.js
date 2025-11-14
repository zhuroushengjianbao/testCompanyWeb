function showHome() {
    document.querySelector('.home').style.display = "block";
    document.querySelector('.about').style.display = "none";
    document.querySelector('.applicationCenter').style.display = "none";
    document.querySelector('.industryApplication').style.display = "none";
    document.querySelector('.newsEvents').style.display = "none";
    document.querySelector('.contact').style.display = "none";
}

function showAbout(){
    document.querySelector('.home').style.display = "none";
    document.querySelector('.about').style.display = "block";
    document.querySelector('.applicationCenter').style.display = "none";
    document.querySelector('.industryApplication').style.display = "none";
    document.querySelector('.newsEvents').style.display = "none";
    document.querySelector('.contact').style.display = "none";
} 

function showApplicationCenter(){
    document.querySelector('.home').style.display = "none";
    document.querySelector('.about').style.display = "none";
    document.querySelector('.applicationCenter').style.display = "block";
    document.querySelector('.industryApplication').style.display = "none";
    document.querySelector('.newsEvents').style.display = "none";
    document.querySelector('.contact').style.display = "none";
}

function showIndustryApplication(){
    document.querySelector('.home').style.display = "none";
    document.querySelector('.about').style.display = "none";
    document.querySelector('.applicationCenter').style.display = "none";
    document.querySelector('.industryApplication').style.display = "block";
    document.querySelector('.newsEvents').style.display = "none";
    document.querySelector('.contact').style.display = "none";
}

function showNewsEvents(){
    document.querySelector('.home').style.display = "none";
    document.querySelector('.about').style.display = "none";
    document.querySelector('.applicationCenter').style.display = "none";
    document.querySelector('.industryApplication').style.display = "none";
    document.querySelector('.newsEvents').style.display = "block";
    document.querySelector('.contact').style.display = "none";
}

function showContact(){
    document.querySelector('.home').style.display = "none";
    document.querySelector('.about').style.display = "none";
    document.querySelector('.applicationCenter').style.display = "none";
    document.querySelector('.industryApplication').style.display = "none";
    document.querySelector('.newsEvents').style.display = "none";
    document.querySelector('.contact').style.display = "block";
}

window.onload = function() {
    showHome();
}