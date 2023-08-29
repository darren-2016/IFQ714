import fetch from "node-fetch";
//fetch("https://www.w3.org/TR/PNG/iso_8859-1.txt")
fetch("car")
    .then(function (response) { return response.text(); })
    .then(function (data) { console.log(data); })
    .catch(function (error) { console.log(`Error occured: ${error.message}`); });


