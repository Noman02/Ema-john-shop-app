import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h3>Orders summary</h3>
                <h3>Selected Items: {cart.length}</h3>
        </div>
    );
};

export default Cart;