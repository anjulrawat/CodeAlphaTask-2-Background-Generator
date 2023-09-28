var css= document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);


var copyButton = document.getElementById("copyButton");

function copyToClipboard() {
    var codeToCopy = css.textContent;
    var tempInput = document.createElement("input");
    tempInput.value = codeToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    copyButton.textContent = "Copied!";
    setTimeout(function() {
        copyButton.textContent = "Copy Background Code";
    }, 2000);
}
copyButton.addEventListener("click", copyToClipboard);
