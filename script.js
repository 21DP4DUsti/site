document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.querySelector('.register-button');
    const registrationPopup = document.querySelector('.registration-popup');
    const closeButton = document.querySelector('.close-button');
    const registerForm = document.querySelector('.popup-content form');

    registerButton.addEventListener('click', function() {
        registrationPopup.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        registrationPopup.style.display = 'none';
    });

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const usernameInput = document.getElementById('username');
        const username = usernameInput.value;

        if (username) {
            const header = document.querySelector('header');
            const userDisplay = document.createElement('div');
            userDisplay.classList.add('user-display');
            userDisplay.textContent = `${username}`;
            header.appendChild(userDisplay);

            registrationPopup.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {

    
    const subscribeForm = document.getElementById('subscribeForm');
    const successMessage = document.querySelector('.success-message');

    subscribeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        successMessage.style.display = 'block';
    });
    
    let cart = [];

 
    function addItemToCart(item) {
        cart.push(item);
        updateCartCounter(); 
    }


    function calculateTotalPrice() {
        let totalPrice = 0;
        for (let item of cart) {
            totalPrice += item.price;
        }
        return totalPrice;
    }
    
    const cartButton = document.querySelector('.cart-icon');
    cartButton.addEventListener('click', function() {
    const cartModal = document.querySelector('.cart-modal');
    const closeCart = document.querySelector('.close-cart');
    const cartTable = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');

   
    cartModal.style.display = 'block';

   
    cartTable.innerHTML = '<tr><th>Item</th><th>Price</th></tr>';
    for (let item of cart) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${item.name}</td><td>$${item.price.toFixed(2)}</td>`;
        cartTable.appendChild(newRow);
    }

    const totalPrice = calculateTotalPrice();
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
});

    const closeCart = document.querySelector('.close-cart');
    closeCart.addEventListener('click', function() {
        const cartModal = document.querySelector('.cart-modal');
        cartModal.style.display = 'none';
    });


   
    const buyButtons = document.querySelectorAll('.product button');
buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const product = this.parentElement;
        const itemName = product.querySelector('h3').textContent;
        const itemPrice = parseFloat(product.querySelector('p').textContent.slice(0, -1));
        addItemToCart({name: itemName, price: itemPrice});

     
        updateCartCounter();

        alert('Item added to cart!');
    });
});

function updateCartCounter() {
    const cartCounter = document.querySelector('.cart-counter');
    cartCounter.textContent = cart.length;
}
});
