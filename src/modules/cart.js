const cart = () => {
    const crtBtn = document.getElementById('cart');
    const cart = document.querySelector('.cart');
    const cartClose = cart.querySelector('.cart-close');

    crtBtn.addEventListener('click', () => {
        cart.style.display = 'flex'
    })

    cartClose.addEventListener('click', () => {
        cart.style.display = 'none'
    })
}

export default cart;