document.getElementById('profile-page').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phonenumber').value;
    const address = document.getElementById('address').value;
    const interests = document.getElementById('password').value;

    const formData = {
        name: name,
        email: email,
        phoneNumber:phone-number,
        address: address,
        interests: interests

    };

    saveFormData(formData);
});

function saveFormData(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    storedFormData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedFormData));
}