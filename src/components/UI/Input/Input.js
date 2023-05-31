import styles from './input.module.css';

export const input = (props) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input id={props.input.id} {...props.input}></input>
        </div>
    )
}
