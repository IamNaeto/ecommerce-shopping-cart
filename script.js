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

// Cart working script
if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)
}else{
    ready()
}

// Making function
function ready(){
    // remove items from cart
    const removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons)
    for(let i=0; i<removeCartButtons.length; i++){
        let button = removeCartButtons[i]
        button.addEventListener("click", removeCartItem)
    }

    // quantity chnages
    let quantityInputs = document.getElementsByClassName("cart-quantity")
    for(let i=0; i<quantityInputs.length; i++){
        let input = quantityInputs[i]
        input.addEventListener("change", quantityChanged);
    }
}


// remove items from cart
function removeCartItem(event){
    const buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal()
}

// quantity chnages
function quantityChanged(event){
    let input = event.target
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateTotal()
}

// update total
function updateTotal(){
    const cartContent = document.getElementsByClassName("cart-content")[0]
    const cartBoxes = cartContent.getElementsByClassName("cart-box");
    let total  = 0;
    for(let i=0; i<cartBoxes.length; i++){
        let  cartBox = cartBoxes[i]
        let priceElement = cartBox.getElementsByClassName("cart-price")[0]
        let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0]
        let price = parseFloat(priceElement.innerText.replace("$", ""))
        let quantity = quantityElement.value
        total = total + price * quantity;

        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    }

}