function Cart({ cartItems = [] }) {
    return (
        <>
            <section className="cart-section">
                <div className="accent-bar-top" />
                <h1>Cart Text</h1>
                <div className="accent-bar-bottom" />

                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.quantity} {item.dishName} - ${item.price.toFixed(2)}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default Cart;