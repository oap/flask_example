function validateForm() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (principal <= 0 || isNaN(principal)) {
        alert('Please enter a valid principal amount greater than 0.');
        return false; // Prevent form submission
    }

    if (rate <= 0 || isNaN(rate)) {
        alert('Please enter a valid rate of interest greater than 0.');
        return false;
    }

    if (time <= 0 || isNaN(time)) {
        alert('Please enter a valid time period greater than 0.');
        return false;
    }

    return true; // Proceed with form submission
}
