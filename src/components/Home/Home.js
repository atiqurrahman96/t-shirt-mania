import React, { useState } from 'react';
import useTShirt from '../../Hooks/useTShirt';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'
const Home = () => {
    const [tshirts, setTShirts] = useTShirt();
    const [carts, setCarts] = useState([]);
    const handleAddToCart = (selectedItem) => {
        const exist = carts.find(productShirt => productShirt._id === selectedItem._id);
        if (!exist) {
            const newCart = [...carts, selectedItem];
            setCarts(newCart);
        }
        else {
            alert('already has been added')
        }

    }
    const handleRemove = (selectedItem) => {
        const rest = carts.filter(productShirt => productShirt._id !== selectedItem._id);
        setCarts(rest)
    }
    return (
        <div className='home-container'>
            <div className="tshirts-container">

                {
                    tshirts.map(tShirt => <TShirt key={tShirt.id} tShirt={tShirt} handleAddToCart={handleAddToCart} >

                    </TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={carts} handleRemove={handleRemove}></Cart>
            </div>
        </div>
    );
};

export default Home;