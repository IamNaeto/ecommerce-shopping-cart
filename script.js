// cart
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#close-cart");

// open cart
cartIcon.onclick = () => {
    cart.classList.add("active")
}

// close cart
closeCart.onclick = () => {
    cart.classList.remove("active")
}