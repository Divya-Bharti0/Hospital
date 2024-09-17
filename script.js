// script.js

// Handle the form submission
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let doctor = document.getElementById('doctor').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;

    if (name === "" || email === "" || date === "" || time === "") {
        alert("Please fill all the fields.");
        return;
    }

    // If the form is valid, show a success message
    alert(`Appointment booked for ${name} with ${doctor} on ${date} at ${time}.`);

    // Reset form fields after submission
    document.getElementById('appointmentForm').reset();
});
