const onLoadElement = document.body;
onLoadElement.onload = getErrorMessage;

function getErrorMessage() {
    alert('Loading page. Data disappeared!');
}

const myButtonElement = document.getElementById("myButton");
myButtonElement.onclick = changePage;

function changePage() {
    myButtonElement.style.backgroundColor = "red";
}

const myDivElement = document.getElementById("myDiv");
myDivElement.onmouseover = changeColorToRed;
myDivElement.onmouseout = changeColorToGreen;

function changeColorToRed() {
    myDivElement.style.backgroundColor = "red";
}

function changeColorToGreen() {
    myDivElement.style.backgroundColor = "lightgreen";
}

const myDiv2Element = document.getElementById("myDiv2");
myDiv2Element.onmousedown = changeColorToRed2;
myDiv2Element.onmouseup = changeColorToGreen2;

function changeColorToRed2() {
    myDiv2Element.style.backgroundColor = "red";
}

function changeColorToGreen2() {
    myDiv2Element.style.backgroundColor = "lightgreen";
}
