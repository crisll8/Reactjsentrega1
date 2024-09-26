import React from 'react';
import './cartwidget.css';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    const itemCount = 3; // Número hardcodeado

    return (
        <div className="cart-widget">
            <FaShoppingCart />
            {itemCount > 0 && <span className="notification">{itemCount}</span>}
        </div>
    );
};

export default cartWidget;
