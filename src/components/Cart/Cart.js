import React from 'react';

const Cart = ({ haldleRemoveToCart, cart }) => {
    let myWish;
    if (cart.length === 0) {
        myWish = <p>Please Added a shirt</p>
    }
    else {
        myWish = <p>Add More</p>
    }
    return (
        <div>
            <h1>This is my Cart:{cart.length}</h1>
            {myWish}
            {
                cart.length !== 0 ? "Cart is available" : "Cart not available"
            }
            <br />
            {
                cart.length === 0 && "Cart Not Loded"
            }
            {
                cart.length === 0 || "I Love Tshirt"
            }
            {
                cart.map(cart => <p key={cart._id}>{cart.name}
                    <button onClick={() => haldleRemoveToCart(cart)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;