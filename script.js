//Listens for submit button to be hit
//Validates form data and then app.js handles the other logic



document.getElementById('submit-button').addEventListener('click', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Call the validateForm function to check the form data
    if (validateForm()) {
        // If the form is valid, you can proceed with any additional logic here
        // For example, sending data to the contract or to a server
    }
});


// Check that all fields in the form are filled out
function validateForm() {
    // Check if at least one character is entered in first name and last name
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    if (firstName.length === 0 || lastName.length === 0) {
        alert('First Name and Last Name are required.');
        return false;
    }

    // Check if the email address contains the @ symbol and ends with ".com"
    const email = document.getElementById('email').value;
    if (!email.includes('@') || !email.endsWith('.com')) {
        alert('Invalid Email Address: address should contain "@" and end with ".com".');
        return false;
    }

    // Check if a radio button is selected
    const regularRadio = document.getElementById('regular');
    const vipRadio = document.getElementById('vip');
    if (!regularRadio.checked && !vipRadio.checked) {
        alert('Please select a Ticket type: Regular or VIP');
        return false;
    }

    return true;
}