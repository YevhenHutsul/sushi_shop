import { Input } from '../../UI/Input/Input';
import styles from './MealItemForm.module.css';
import { useRef, useState } from 'react';


export const MealItemForm = ({id,onAddToCart}) => {

    const amountInputRef = useRef();
    const [isAmountValid, setIsAmoundValid] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();
        const inputAmount = amountInputRef.current.value;

        if(inputAmount.trim().length === 0 || Number(inputAmount) < 1){
            setIsAmoundValid(false)
            return;
        }

        onAddToCart(Number(inputAmount))
    }
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref = {amountInputRef}
                label = {'Количество'}
                input = {{
                    id: id,
                    type: 'number',
                    min: '1',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button className={styles.button}>Добавить</button>
            {!isAmountValid && <p>Не коректная форма</p>}
        </form>
    )
}