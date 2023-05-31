import React from "react";
import { CartIcon } from './CartIcon';
import styles from './HeaderCartButton.module.css';

export const HeaderCardButton = (props) => {
    return (
        <button className={styles.button}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Корзина</span>
            <span className={styles.badge}>2</span>
        </button>
    )
}