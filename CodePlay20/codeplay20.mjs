import fetch from "node-fetch";
//fetch("https://www.w3.org/TR/PNG/iso_8859-1.txt")
/*fetch("car")
    .then(function (response) { return response.text(); })
    .then(function (data) { console.log(data); })
    .catch(function (error) { console.log(`Error occured: ${error.message}`); });
*/

async function getUrl(url) {
    try {
        let response = await fetch(url);
        let text = await response.text();
        console.log(text);
    } catch (error) {
        console.log(`Error occurred: ${error.message}`);
    }
}

getUrl("car");
//getUrl("https://www.w3.org/TR/PNG/iso_8859-1.txt");
