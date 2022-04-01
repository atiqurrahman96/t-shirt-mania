import React from 'react';
import './Cart.css'
const Cart = (props) => {


    const { cart, handleRemove } = props;
    let greetings;
    if (cart.length === 4) {
        greetings = <p>Thanks for adding</p>
    }
    else if (cart.length === 0) {
        greetings = <p>please ,add</p>
    }
    else {
        greetings = 'keep adding'
    }






    return (
        <div>
            <h1>This is Cart</h1>
            <p>Selected Items:{cart.length}</p>
            {
                cart.map(pd => <p>
                    {pd.name} <button onClick={() => handleRemove(pd)}>remove</button>
                </p>)
            }
            {greetings}
            {cart.length !== 2 ? <p>hurray, good</p> : <button>remove all</button>}
            {cart.length === 3 && <p>salute</p>}
            {cart.length === 0 || <p>hey</p>}
        </div>
    );
};

export default Cart;