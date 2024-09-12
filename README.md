Login Form with Show Password Feature:-

This is a simple login form built with HTML, CSS, and JavaScript. It includes features such as form validation, show/hide password, and local storage to remember the user's email.

Features:

Email Validation: Ensures the user enters a valid email format.

Password Validation: Password must be at least 6 characters long.

Show/Hide Password: Toggle the visibility of the password.

Remember Me: Pre-fills the email field if the user has logged in previously.

Loading Spinner: Shows a spinner while the login request is being processed.

Mock API Call: Simulates an API call using fetch().

Prerequisites:

Ensure you have a modern web browser installed that supports HTML5, CSS3, and JavaScript ES6. You can run this project locally on your machine by following the steps below.

Instructions:

Clone the repository:

bash

git clone https://github.com/yourusername/login-form-show-password.git

Navigate to the project directory:

bash

Copy code

cd login-form-show-password

Open the index.html file in your web browser:

For Windows: Double-click the index.html file.

Running the Project:-

-Open index.html in any browser.

-Enter a valid email and password.

-Check the "Show Password" box to see the password in plain text.

-Submit the form, and it will show a mock API login result (with either success or failure).

-Storing the User Email

The project saves the user's email in the browser's local storage. If the user revisits the page, the email will be pre-filled from local storage.
