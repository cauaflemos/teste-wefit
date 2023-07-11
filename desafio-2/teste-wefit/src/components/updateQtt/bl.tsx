import { CartContext } from "../../context/cartContext";
import { useContext, useState, useEffect } from 'react';
import { IProduct } from "../../interfaces";

export const cartActions = (productId: number) => {
    const { dispatch, state } = useContext(CartContext);
    const item = state.items.find(e => e.product.id === productId);
    const itemQtt = String(item?.quantity);
    const [inputValue, setInputValue] = useState(itemQtt);

    useEffect(() => {
        setInputValue(itemQtt)
    }, [item])

    const addToCart = (product: IProduct) => {
        dispatch({ type: "ADD_TO_CART", product });
    };

    const updateItem = (quantity: number) => {
        let payload = {
            productId: productId,
            quantity: quantity
        }
        dispatch({ type: "UPDATE_ITEM", payload });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value === "") {
            setInputValue(itemQtt)
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value);
        setInputValue(String(newValue));

        if (newValue > 0) {
            updateItem(newValue);
        }
    };

    const decrementItem = (productId: number) => {
        dispatch({ type: 'DECREMENT_ITEM', productId });
    };

    return { addToCart, decrementItem, handleChange, inputValue, handleBlur };
};