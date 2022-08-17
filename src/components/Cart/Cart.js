import React from 'react';

const Cart = ({haldleRemoveToCart, cart}) => {
    return (
        <div>
            <h1>This is my Cart:{cart.length}</h1>
            {
                cart.map(cart => <p key={cart._id}>{cart.name}
                <button onClick={()=> haldleRemoveToCart(cart)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;