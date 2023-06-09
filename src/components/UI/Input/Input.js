import styles from './input.module.css';
import React from 'react';

export const Input = React.forwardRef((props, ref) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} id={props.input.id} {...props.input}></input>
        </div>
    )
})
