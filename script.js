//Event listener for the submit button
//Validates form data before app.js handles submission logic

document.getElementById('submit-button').addEventListener('click', function (event) {
    event.preventDefault();  // Prevent the default form submission behavior

    if (validateForm()) {
        // If the form is valid, proceed with additional logic to send form data
    }
});

// Validates the form data
// Checks if all fields are filled out correctly
// Returns 'true' if the form is valid, False will alert the user
function validateForm() {
    // Check - first name and last name contain at least one character
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    if (firstName.length === 0 || lastName.length === 0) {
        alert('First Name and Last Name are required.');
        return false;
    }

    // Check - email address contains the '@' symbol and ends with '.com'
    const email = document.getElementById('email').value;
    if (!email.includes('@') || !email.endsWith('.com')) {
        alert('Invalid Email Address: address should contain "@" and end with ".com".');
        return false;
    }

    // Check - radio button is selected
    const regularRadio = document.getElementById('regular');
    const vipRadio = document.getElementById('vip');
    if (!regularRadio.checked && !vipRadio.checked) {
        alert('Please select a Ticket type: Regular or VIP');
        return false;
    }

    return true;
}