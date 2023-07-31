/* Code-play 10: More on loops
   Experimenting with more loops
   In the TERMINAL window, use the following to execute the script:  node codeplay10.js 
  */


let brands = ["Ferrari", "Pagani", "Mazda", "Holden", "Ford", "Mercedes", "Nissan", "Dacia", "Saab"];

let i = 0;
while (i < brands.length) {
    console.log(brands[i]);
    i++;
}

let oneFound = false;
let index = 0;
let numbers = [5,3,1,4,2];
while (!oneFound && index < numbers.length) {
    if (numbers[index] === 1) {
        console.log(`Found 1 at index ${index}`);
        oneFound = true;
    }
    index++;
}


oneFound = false;  // Resetting variables to original values
index = 0;
do {
    if (numbers[index] === 1) {
        console.log(`Found 1 at index ${index}`);
        oneFound = true;
    }
    index++;
} while (!oneFound && index <numbers.length);


let coords = [[50,20],[60,10],[30,40]];
for (let i = 0; i < coords.length; i++) {
    console.log(`Getting coordinates at index ${i}`);
    for (let j = 0; j < coords[i].length; j++) {
        console.log(`Coordinate ${j} is ${coords[i][j]}`);
    }
} 


let newCoords= [[0,50],[30,30],[50,0]];
for (let i = 0; i < newCoords.length; i++) {
    console.log(`Looking for at least one 0 coordinate at index ${i}`);
    for (let j = 0; j < newCoords[i].length; j++) {
        if (newCoords[i][j] === 0) {
            console.log(`Coordinate ${j} is a 0, breaking`);
            break;
        } else {
            console.log(`Coordinate ${j} isn't a 0`);
        }
    }
}


let moreNewCoords = [[10,10],[0,20],[20,0]];
function findZeroCoordinates(coords) {
    for (let i = 0; i < coords.length; i++) {
        console.log(`Looking for at least one 0 coordinate at index ${i}`);
        for (let j = 0; j < coords[i].length; j++) {
            if (coords[i][j] === 0 ) {
                console.log(`Coordinate ${j} is a 0, returning`);
                return;
            } else {
                console.log(`Coordinate ${j} isn't a 0`);
            }
        }
    }
}
findZeroCoordinates(moreNewCoords);

