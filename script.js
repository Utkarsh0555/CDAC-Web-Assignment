document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const apiMessage = document.getElementById('apiMessage');
  const spinner = document.getElementById('spinner');

  // Clear previous errors and messages
  emailError.textContent = '';
  passwordError.textContent = '';
  apiMessage.textContent = '';

  // Simple validations
  let valid = true;

  if (!validateEmail(email)) {
    emailError.textContent = 'Invalid email address.';
    valid = false;
  }

  if (password.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters long.';
    valid = false;
  }

  if (!valid) return;

  // Show loading spinner
  spinner.style.display = 'block';

  // Simulate API call
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: email,
      password: password
    }),
  })
  .then(response => response.json())
  .then(data => {
    // Hide spinner
    spinner.style.display = 'none';

    // Store email in local storage
    localStorage.setItem('userEmail', email);

    // Simulate a successful login response
    apiMessage.textContent = 'Login successful!';
    apiMessage.style.color = 'green';

    // Optionally, redirect to a new page
    // window.location.href = "success.html";
  })
  .catch(error => {
    spinner.style.display = 'none';
    apiMessage.textContent = 'Login failed. Please try again.';
    apiMessage.style.color = 'red';
  });
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Retrieve saved email from local storage and pre-fill it
const savedEmail = localStorage.getItem('userEmail');
if (savedEmail) {
  console.log('Stored Email:', savedEmail);
  document.getElementById('email').value = savedEmail;
}

// Show/Hide password
document.getElementById('showPassword').addEventListener('change', function() {
  const passwordField = document.getElementById('password');
  const currentType = passwordField.type;

  // Toggle between 'password' and 'text'
  passwordField.type = currentType === 'password' ? 'text' : 'password';
});
