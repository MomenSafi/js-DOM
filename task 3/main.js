let show = document.querySelector('.toggle-password');
let passwordInput = document.getElementById("passwordInput");
let RpasswordInput = document.getElementById("RpasswordInput");
let statusDiv = document.getElementById('status');

show.onclick = function togglePasswordVisibility() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
};

function updateStatus(message, isValid) {
    statusDiv.innerHTML = message;
    statusDiv.style.color = isValid ? 'green' : 'red';
}

function checkPassword() {
    const password = passwordInput.value;
    const RPassword = RpasswordInput.value;

    if (password.length < 6) {
        updateStatus(`The password must be at least 6 characters`, false);
    } else if (password !== RPassword) {
        updateStatus(`The passwords don't match`, false);
    } else {
        updateStatus(`Password and Repeat Password match`, true);
    }
}

passwordInput.addEventListener('input', checkPassword);
RpasswordInput.addEventListener('input', checkPassword);
