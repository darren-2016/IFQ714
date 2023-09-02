window.onload = function () {
    document.getElementById("colourSelect").addEventListener("change", changeColour);
    //document.getElementById("addElementButton").addEventListener("click", addElement);
    //document.getElementById("removeElementButton").addEventListener("click", removeElement);
}


function changeColour(event) {
    let colour = event.target.value;
    let sideOne = document.getElementById("sideOne");
    let paragraphs = sideOne.getElementsByTagName("p");
    //sideOne.setAttribute("style", `flex:1; color:${colour}`);
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].setAttribute("style", `color:${colour}`);
    }
}