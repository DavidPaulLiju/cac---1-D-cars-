let cartCount = 0;
let totalAmount = 0;
const exchangeRate = 74.5; // Replace with the actual exchange rate

function toggleCart() {
    const cart = document.getElementById('cart');
    const displayStyle = window.getComputedStyle(cart).display;

    cart.style.display = displayStyle === 'none' || displayStyle === '' ? 'block' : 'none';
}

function addToCart(productName, productDescription, productPrice) {
    cartCount++;
    totalAmount += productPrice * exchangeRate; // Convert to Indian Rupees
    updateCartCount();
    updateTotal();
    const cartItems = document.getElementById('cart-items');
    const newItem = document.createElement('li');
    newItem.innerHTML = `${productName} - ${productDescription} - ₹${(productPrice * exchangeRate).toFixed(2)} <button onclick="removeFromCart(this, ${productPrice})">Remove</button>`;
    cartItems.appendChild(newItem);
}

function removeFromCart(button, productPrice) {
    const item = button.parentNode;
    item.parentNode.removeChild(item);
    cartCount--;
    totalAmount -= productPrice * exchangeRate; // Convert to Indian Rupees
    updateCartCount();
    updateTotal();
}

function clearCart() {
    cartCount = 0;
    totalAmount = 0;
    updateCartCount();
    updateTotal();
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    // Hide the cart after clearing
    const cart = document.getElementById('cart');
    cart.style.display = 'none';
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cartCount.toString();
}

function updateTotal() {
    const totalElement = document.getElementById('total');
    totalElement.textContent = `Total: ₹${totalAmount.toFixed(2)}`;
}
