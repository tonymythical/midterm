document.getElementById('vacationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Reset errors
    document.querySelectorAll('.error').forEach(el => el.innerText = '');

    const destination = document.getElementById('destination').value;
    const travelers = document.getElementById('travelers').value;
    const departureDate = document.getElementById('departureDate').value;

    let isValid = true;

    if (!destination) {
        document.getElementById('destError').innerText = 'Please select a destination.';
        isValid = false;
    }

    if (!departureDate) {
        document.getElementById('dateError').innerText = 'Select a date.';
        isValid = false;
    }

    if (parseInt(travelers) <= 0) {
        document.getElementById('travError').innerText = 'Must be greater than 0.';
        isValid = false;
    }

    if (isValid) {
        // Simple routing simulation
        document.getElementById('form-view').style.display = 'none';
        document.getElementById('thank-you').style.display = 'block';
    }
});