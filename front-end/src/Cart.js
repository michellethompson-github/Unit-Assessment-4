function Cart(props) {

    let total = 0;
    for (let i = 0; i < props.cart.length; i++) {
        total += props.cart[i].price * props.cart[i].quantity;
    }
    total = (Math.round(total * 100) / 100).toFixed(2);

    function onClickDelete(i) {
        props.deleteFromCart(i);
    }

    function onClickCheckout() {
        props.emptyTheCart();
    }

    return (
        <div className="cart-container">
            <div className="cart">
                <h2>Cart</h2>
            </div>
            <div className="cart-total">
                Cart Total: ${total}
            </div>

            <div className="cart-items">
                {
                    props.cart.map((product, i) =>
                        <div key={i} className="cart-item-product">
                            <div className="image-wrapper">
                                <img src={"images/" + product.image}></img>
                            </div>
                            <div>
                                {product.price} x {product.quantity}
                            </div>
                            <div>
                                <button onClick={() => onClickDelete(i)}>Delete</button>
                            </div>
                        </div>
                    )
                }
            </div>

            <button className="checkout-button" onClick={onClickCheckout}>PAY WITH CREDIT CARD</button> 
        </div>
    );
}

export default Cart;