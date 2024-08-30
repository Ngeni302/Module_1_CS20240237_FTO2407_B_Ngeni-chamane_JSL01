function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    // Initialize the result variable

    //create variable containing the prefix we want
    const pattern = 'pet_';
    let result = ''; // Placeholder for validation result


    // Check if the input matches the pattern
     if (pattern) {
        result = 'Valid Syntax.'; // Set result if input is valid
    } else {
        result = 'Invalid Syntax.'; // Set result if input is invalid
    }
    
    document.getElementById('result').innerText = result;

}

