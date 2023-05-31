import React from "react";
import { CartIcon } from './CartIcon';
import styles from './HeaderCartButton.module.css';
import { useContext } from "react";
import { CartContext } from "../../../../Store/CartContex";

export const HeaderCardButton = ({setVisibleCart}) => {
    const cartContext = useContext(CartContext);

    const cartItemNumber = cartContext.items.reduce((currentValue, item) => {
        return currentValue + item.amount;
    }, 0)
    return (
        <button onClick={setVisibleCart} className={styles.button}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Корзина</span>
            <span className={styles.badge}>{cartItemNumber}</span>
        </button>
    )
}