import styles from './Modal.module.css';
import ReactDOM  from 'react-dom';
import React from 'react';

const BackDrop = ({setVisibleCartFalse}) => {
    return <div className={styles.backdrop} onClick ={setVisibleCartFalse}></div>
};
const ModalWindow = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
};

const portalEl = document.getElementById('overlayes');

export const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop setVisibleCartFalse = {props.setVisibleCartFalse}/>, portalEl)}
            {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalEl)}
        </React.Fragment>
    )
};