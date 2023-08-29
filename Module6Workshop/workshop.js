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