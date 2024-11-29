document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value.trim();

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Reset error states
    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    let isValid = true;

    if (emailInput !== 'elrobyadam8@gmail.com') {
        emailError.textContent = 'Email is incorrect';
        emailError.style.display = 'block';
        isValid = false;
    }

    if (passwordInput !== 'adam1992011') {
        passwordError.textContent = 'Password is incorrect';
        passwordError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        // Redirect to the desired path
        window.location.href = 'main page/main.html';
    }
});
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const isPassword = passwordInput.type === 'password';

    // Toggle the type attribute
    passwordInput.type = isPassword ? 'text' : 'password';

    // Toggle the icon class
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});
    if (isValid) {
        // Store login status in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect to the main page
        window.location.href = 'main page/main.html';
    }
});
