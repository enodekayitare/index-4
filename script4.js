// Mock user data for demonstration
let users = [
    { id: 1, username: 'user1', email: 'user1@example.com', password: 'password1', role: 'user' },
    { id: 2, username: 'user2', email: 'user2@example.com', password: 'password2', role: 'admin' }
];

// Function to simulate user login
function login() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    let user = users.find(u => u.email === email && u.password === password);
    if (user) {
        alert(`Welcome, ${user.username}!`);
        // Redirect to appropriate page based on user role
        if (user.role === 'admin') {
            // Redirect to admin panel
            location.href = 'admin.html';
        } else {
            // Redirect to user dashboard
            location.href = 'dashboard.html';
        }
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

// Function to simulate user registration
function register() {
    let username = document.getElementById('registerUsername').value;
    let email = document.getElementById('registerEmail').value;
    let password = document.getElementById('registerPassword').value;

    // Validate and save user data (not implemented in this example)
    alert('Registration successful!');
}

// Function to view users (admin functionality)
function viewUsers() {
    // Display list of users (not implemented in this example)
    alert('Viewing list of users...');
}

// Function to edit user profile (admin functionality)
function editUser() {
    // Edit user profile (not implemented in this example)
    alert('Editing user profile...');
}

// Function to delete user account (admin functionality)
function deleteUser() {
    // Delete user account (not implemented in this example)
    alert('Deleting user account...');
}
