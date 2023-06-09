import { useContext } from 'react';
import { MealItemForm } from './MealItemForm';
import styles from './meal.module.css'
import { CartContext } from '../../../Store/CartContex';

export const MealItem = ({ name, description, price, id}) => {
    const formattedPrice = `$${price.toFixed(2)}`;
    const cartContext = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartContext.addItem({
            id:id,
            name: name,
            amount: amount,
            price: price
        })
    }
    return (
        <li className={styles.meal} key={id}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{formattedPrice}</div>
            </div>
            <div>
                <MealItemForm
                    onAddToCart={addToCartHandler}
                    id={id}
                />
            </div>
        </li>
    )
}