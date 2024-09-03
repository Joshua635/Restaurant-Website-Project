// main.js

// table book

document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to server for now

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var guests = document.getElementById('guests').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    // Simple form validation
    if (name === '' || email === '' || phone === '' || guests === '' || date === '' || time === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If all is well, proceed with form submission (this is just a demo)
    alert('Reservation successful!');
    // Here you could add an actual form submission using AJAX or a form action to a server
});

// Email validation function
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


// JavaScript to update the year dynamically
document.getElementById('year').textContent = new Date().getFullYear();



