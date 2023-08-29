// Sets the text to regular style.
function setTextRegular() {
    const text = document.getElementById("changingText");
    text.setAttribute("style", "font-style: normal; font-weight: normal");
}

// Sets the text to italic style.
function setTextItalic() {
    const text = document.getElementById("changingText");
    text.setAttribute("style", "font-style: italic; font-weight: normal");
}

// Sets the text to bold style.
function setTextBold() {
    const text = document.getElementById("changingText");
    text.setAttribute("style", "font-style: normal; font-weight: bold");
}

// Sets the background colour.
function setBackgroundColour(colour) {
    document.body.setAttribute("style", `background-color:${colour}`);
}


function getSelectedBackgroundColour (event) {
    let colour = event.target.value;
    setBackgroundColour(colour);
}

function setEnableButtonPressed() {
    document.getElementById("enableButton").disabled = true;
    document.getElementById("disableButton").disabled = false;
    document.getElementById("colourSelect").disabled = false;
}

function setDisableButtonPressed() {
    document.getElementById("enableButton").disabled = false;
    document.getElementById("disableButton").disabled = true;
    document.getElementById("colourSelect").disabled = true;
}

function enableEventListener() {
    document.getElementById("colourSelect").addEventListener("change", getSelectedBackgroundColour);
    document.getElementById("enableButton").addEventListener("click",  setEnableButtonPressed);
    document.getElementById("disableButton").addEventListener("click",  setDisableButtonPressed);

    //document.getElementById("enableButton").disabled = true;
    //document.getElementById("disableButton").disabled = false;

}


window.onload = function () {
    document.getElementById("regularButton").addEventListener("click", setTextRegular); 
    document.getElementById("italicButton").addEventListener("click", setTextItalic);
    document.getElementById("boldButton").addEventListener("click", setTextBold);

    enableEventListener();
}
