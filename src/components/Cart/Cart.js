import { Modal } from '../UI/Modal/Modal';
import styles from './Cart.module.css';
import { useContext } from 'react';
import { CartContext } from '../../Store/CartContex';
import { CartItem } from './cartItem';


export const Cart = ({ setVisibleCartFalse }) => {
    const cartContext = useContext(CartContext);
    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;
    const removeCardHandler = (id) => {
        cartContext.removeItem(id);
    }
    const addCartItemHandler = (item) => {
        cartContext.addItem({...item, amount:1})
    }

    const cartItems = <ul className={styles['cart-items']}>
        {cartContext.items.map((item) => {
            return <CartItem
                id={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onAdd={addCartItemHandler.bind(null, item)}
                onRemove={removeCardHandler.bind(null, item)}
            />
        })}
    </ul>
    return (
        <Modal setVisibleCartFalse={setVisibleCartFalse}>
            {cartItems}
            <div className={styles.total}>
                <span>Итого</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button onClick={setVisibleCartFalse} className={styles['button--alt']}>Закрыть</button>
                {hasItems && <button className={styles.button}>Заказать</button>}
            </div>
        </Modal>
    )
}