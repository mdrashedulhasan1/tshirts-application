import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useHook from '../hooks/useHook';
import TShirt from '../TShirt/TShirt';
import './Home.css';
const Home = () => {
    const [tshirts, setTshirts] = useHook();
    const [cart,setCart] = useState([]);
    const handleAddToCart = (selectedItem)=>{
        const exixts = cart.find(sthirt => sthirt._id == selectedItem._id);
        if(!exixts){
            const newCart = [...cart,selectedItem];
            setCart(newCart);
        }
        else{
            alert('Already exixts');
        }
       
    };
    const haldleRemoveToCart = (selectedItem)=>{
        const rest = cart.filter(sthirt => sthirt._id !== selectedItem._id);
       setCart(rest);
    }

    return (
        <div className='home-container'>
            <div className="tshirts-container">
                {
                    tshirts.map(tshirt => <TShirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} haldleRemoveToCart={haldleRemoveToCart}></Cart>
            </div>
        </div>
    );
};

export default Home;