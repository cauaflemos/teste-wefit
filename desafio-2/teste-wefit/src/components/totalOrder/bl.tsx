import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/cartContext";

export const totalOrderActions = () => {
    const { state } = useContext(CartContext);
    let initialTotal = 0

    state.items.forEach(e => {
        initialTotal += e.quantity * e.product.price
    });

    const [
        totalOrderValue,
        setTotalOrderValue
    ] = useState(initialTotal);

    useEffect(() => {
        let sumValue = 0

        state.items.forEach(e => {
            sumValue += e.quantity * e.product.price
        });
        setTotalOrderValue(sumValue)
    }, [state.items])

    return { totalOrderValue };
};