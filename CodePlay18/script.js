window.onload = function() {
    document.getElementById("button").addEventListener("click", buttonEvent);
    const square = document.getElementById("square");
    square.addEventListener("click", function(event) {
        square.innerHTML = `You clicked the mouse at ${event.offsetX}, ${event.offsetY} in the square.`;
    });
    document.body,addEventListener("click", function() {
        document.getElementById("square").innerHTML = "You clicked on the page body.";
    }, true);
}


function buttonEvent(event) {
    const counter = document.getElementById("counter");
    currentNum = Number.parseInt(counter.innerHTML);
    counter.innerHTML = `${++currentNum}`;
    if (currentNum == 5) {
        document.getElementById("button").removeEventListener("click", buttonEvent);
    }
    event.stopPropagation();
}
