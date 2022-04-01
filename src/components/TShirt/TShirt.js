import React from 'react';
import './TShirt.css'
const TShirt = (props) => {
    const { handleAddToCart, tShirt } = props;
    const { name, picture, price } = tShirt;

    return (
        <div className='tShirt-container'>
            <img src={picture} alt="" />
            <h2>Name:{name}</h2>
            <h3>Price: $ <span>{price}</span></h3>
            <button onClick={() => handleAddToCart(tShirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;