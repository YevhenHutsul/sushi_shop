import { useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Layout/Header/Header";
import { Meals } from "./components/Meals/Meals";
import { CartContexProvaider } from "./Store/CartContextProvaider";

function App() {

    const [isCartVisible, setIsCartVisible] = useState(false);

    const setCartVisibleTrue = () => {
        setIsCartVisible(true);
    };

    const setCartVisibleFlase = () => {
        setIsCartVisible(false);
    }
    return (
        <CartContexProvaider>
            {isCartVisible && <Cart setVisibleCartFalse = {setCartVisibleFlase}/>}
            <Header setVisibleCart = {setCartVisibleTrue}/>
            <main>
                <Meals/>
            </main>
        </CartContexProvaider>
    );
}

export default App;
