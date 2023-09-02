window.onload = function () {
    document.getElementById("colourSelect").addEventListener("change", changeColour);
    //document.getElementById("addElementButton").addEventListener("click", addElement);
    //document.getElementById("removeElementButton").addEventListener("click", removeElement);
}



function changeColour(event) {
    let colour = event.target.value;
    let elements = document.getElementsByClassName("sideOne");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute("style").includes("flex:1")) {
            elements[i].setAttribute("style", `flex:1; color:${colour}`);
        } else {
            elements[i].setAttribute("style", `color:${colour}`);
        }
    }
}