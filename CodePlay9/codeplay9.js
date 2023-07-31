/* Code-play 9: Basic loops
   Experimenting with more conditionals
   In the TERMINAL window, use the following to execute the script:  node codeplay9.js 
  */

 for (let i = 0; i < 5; i++) {
    console.log("The current number is " + i.toString());
 }


// for (let i = 0; i > -1; i++) {
//    console.log("The current number is " + i.toString());
// }

 let counter = 5;
 for ( ; counter < 10; counter++) {
    console.log("Counter is at " + counter.toString());
 }


 let brands = ["Ferrari", "Pagani", "Mazda", "Holden", "Ford", "Mercedes", "Nissan", "Dacia", "Saab"];
 for (let i = 0; i < brands.length; i++) {
    console.log(brands[i]);
 }

 let target = "Nissan";
 for (let i = 0; i < brands.length; i++) {
    if (brands[i] == target) {
        console.log(`The value ${target} is in position ${i} of the array.`);
        break;
    }
 }