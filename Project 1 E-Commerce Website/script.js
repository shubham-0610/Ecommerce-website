// Function to add product to the cart
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = cart.find(item => item.name === productName);

    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Function to update the cart count in the navbar
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalCount;
}

// Function to remove one item from the cart
function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = cart.find(item => item.name === productName);

    if (product) {
        if (product.quantity > 1) {
            product.quantity -= 1;
        } else {
            cart = cart.filter(item => item.name !== productName);
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCartItems();
}

// Function to display cart items in the cart page
function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            let cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <h2>${item.name}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }
}

// Event listeners for "Add to Cart" buttons
document.querySelectorAll('.product-item .button').forEach(button => {
    button.addEventListener('click', (event) => {
        let productItem = event.target.closest('.product-item');
        let productName = productItem.querySelector('h2').textContent;
        let productPrice = productItem.querySelector('p').textContent;
        addToCart(productName, productPrice);
    });
});

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);
// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});

// Get the modal
var modal = document.getElementById("auth-modal");

// Get the button that opens the modal
var signupButton = document.querySelector(".signup-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
signupButton.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission (add your authentication logic here)
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Sign up form submitted");
    modal.style.display = "none";
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login form submitted");
    modal.style.display = "none";
});

// Get the modal
var modal = document.getElementById("auth-modal");

// Get the buttons that open the modal
var signupButton = document.querySelector(".signup-button");
var loginButton = document.querySelector(".login-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the signup button, open the signup form
signupButton.onclick = function() {
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
    modal.style.display = "block";
}

// When the user clicks on the login button, open the login form
loginButton.onclick = function() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission (add your authentication logic here)
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Sign up form submitted");
    modal.style.display = "none";
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login form submitted");
    modal.style.display = "none";
});

// Validate login form
function validateLoginForm() {
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;
    let errorMessage = '';

    if (username.length < 3) {
        errorMessage += 'Username must be at least 3 characters long.\n';
    }
    if (password.length < 6) {
        errorMessage += 'Password must be at least 6 characters long.\n';
    }

    if (errorMessage) {
        document.getElementById('login-error').innerText = errorMessage;
        return false;
    }
    return true;
}

// Handle form submission (add your authentication logic here)
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateSignUpForm()) {
        alert("Sign up form submitted");
        modal.style.display = "none";
    }
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateLoginForm()) {
        alert("Login form submitted");
        modal.style.display = "none";
    }
});