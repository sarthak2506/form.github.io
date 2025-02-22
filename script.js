document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const bitsId = document.getElementById('bitsId').value;
    const hostel = document.getElementById('hostel').value;
    const size = document.querySelector('input[name="size"]:checked');
    const terms = document.getElementById('terms').checked;

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const bitsIdError = document.getElementById('bitsIdError');
    const hostelError = document.getElementById('hostelError');
    const sizeError = document.getElementById('sizeError');
    const termsError = document.getElementById('termsError');

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    phoneError.style.display = 'none';
    bitsIdError.style.display = 'none';
    hostelError.style.display = 'none';
    sizeError.style.display = 'none';
    termsError.style.display = 'none';

    if (name.length < 5 || name.length > 50) {
        nameError.textContent = 'Enter Your Full Name';
        nameError.style.display = 'block';
        isValid = false;
    }

    if (!email.endsWith('@pilani.bits-pilani.ac.in')) {
        emailError.textContent = 'Enter a valid email address';
        emailError.style.display = 'block';
        isValid = false;
    }

    if (!phone.match(/^\d{10}$/)) {
        phoneError.textContent = 'Please enter a valid phone no';
        phoneError.style.display = 'block';
        isValid = false;
    }

    const bitsIdPattern = /^\d{4}[A-Za-z0-9]{2}PS\d{4}P$/;
    if (!bitsId.match(bitsIdPattern)) {
        bitsIdError.textContent = 'Enter a valid BITS ID';
        bitsIdError.style.display = 'block';
        isValid = false;
    }

    if (hostel === '') {
        hostelError.textContent = 'Select a hostel.';
        hostelError.style.display = 'block';
        isValid = false;
    }

    if (!size) {
        sizeError.textContent = 'Select a size.';
        sizeError.style.display = 'block';
        isValid = false;
    }

    if (!terms) {
        termsError.textContent = 'You must agree to the terms and conditions.';
        termsError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        const formData = {
            name,
            email,
            phone,
            bitsId,
            hostel,
            size: size.value,
            terms
        };

        localStorage.setItem(bitsId, JSON.stringify(formData));
        alert('Form submitted successfully!');
    }
});