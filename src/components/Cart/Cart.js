import { Modal } from '../UI/Modal/Modal';
import styles from './Cart.module.css';

export const Cart = ({setVisibleCartFalse}) => {
    const cartItems = [12143];
    return (   
        <Modal setVisibleCartFalse = {setVisibleCartFalse}>
            {cartItems}
            <div className={styles.total}>
                <span>Итого</span>
                <span>50</span>
            </div>
            <div className={styles.actions}>
                <button onClick={setVisibleCartFalse} className={styles['button--alt']}>Закрыть</button>
                <button className={styles.button}>Заказать</button>
            </div>
        </Modal>
    )
}