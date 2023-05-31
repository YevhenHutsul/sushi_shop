import { CartContext } from "./CartContex";
import { useReducer } from "react";

const initialState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD__ITEM') {
        const updateItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price *action.item.amount;
        return {
            items: updateItems,
            totalAmount: updatedTotalAmount,
        }
    }
    return initialState;
}

export const CartContexProvaider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

    const addItemHandler = item => { 
        dispatchCartAction({
            type:'ADD__ITEM',
            item: item
        })
     }
    const removeItemHandler = id => { }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}