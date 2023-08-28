window.onload = function() {
    document.getElementById("button").addEventListener("click", buttonEvent);
}


function buttonEvent() {
    const counter = document.getElementById("counter");
    currentNum = Number.parseInt(counter.innerHTML);
    counter.innerHTML = `${++currentNum}`;
    if (currentNum == 5) {
        document.getElementById("button").removeEventListener("click", buttonEvent);
    }
}
