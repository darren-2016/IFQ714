// Program to compute Fibonacci sequence to N terms.
 

// Three constant variables for example uses of the function.
 const ThreeTerms = 3, SevenTerms = 7, ElevenTerms = 11;

// A function to compute the Fibonacci sequence.
// Parameter indicates how many terms to progress to.
function Fibonacci (terms = 0) {
    // Variables for the two terms to add together, starting with 0 and 1.
    let term1 = 0, term2 = 1;

    // Variable for storing the next term.
    let nextTerm;

    // Loop through until we have computed the specified number of terms.
    for (let i = 1; i <= terms; i++) {
        // Print the current value of the first term to the console.
        console.log(term1);
                                            
        // Compute the next term and store it.
        nextTerm = term1 + term2;

        // Set the values of the values to add together for the next term.
        term1 = term2;
        term2 = nextTerm;
    }
}
 

// Call the function above with each of the constant variables.
Fibonacci(ThreeTerms);
Fibonacci(SevenTerms);
Fibonacci(ElevenTerms);
