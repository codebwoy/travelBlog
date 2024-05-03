// new forms collection

document.getElementById('contact_form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form values
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let email = document.getElementById('email_addr').value;
    let phone = document.getElementById('phone_input').value;
    let message = document.getElementById('message').value;
    
    // Create message to display in alert
    const alertMessage = "First Name: " + firstName + "\n" +
                       "Last Name: " + lastName + "\n" +
                       "Email: " + email + "\n" +
                       "Phone: " + phone + "\n" +
                       "Message: " + message;
    
    // Display the message in a window alert
    window.alert(`Simon der Globetrotter says thank you: ${alertMessage}`);
});
