import sushiImg from "../../../assets/img/sushi_header.jpg";
import styles from "./header.module.css";
import React from "react";
import { HeaderCardButton } from "./HeaderButton/HeaderCardButton";


export const Header = (props) => {
    return (
    <React.Fragment>
        <header className={styles.header}>
            <h1>Япона кухня</h1>
            <HeaderCardButton/>
        </header>
        <div className={styles['main-image']}>
            <img src={sushiImg} alt={'Наши суши'}/>
        </div>
    </React.Fragment>
    )
}