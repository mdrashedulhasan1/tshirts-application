import React from 'react';
import './TShirt.css';
const TShirt = ({handleAddToCart,tshirt}) => {
    const {name,picture,price} = tshirt;
    return (
        <div className='tshirt-container'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <button onClick={()=> handleAddToCart(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;