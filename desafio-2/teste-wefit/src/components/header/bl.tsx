import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const ItemsQuantity = () => {
    const { state } = useContext(CartContext);

    let cartQuantity = 0;

    state.items.forEach(e => cartQuantity += e.quantity);

    return {
        quantity: cartQuantity
    }
};