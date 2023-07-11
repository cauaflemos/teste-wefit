import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/cartContext';

export const cardCartActions = (productId: number) => {
    const { dispatch, state } = useContext(CartContext);

    const item  = state.items.find(e => e.product.id === productId);

    const [
        subtotal,
        setSubtotal
    ] = useState<number>(item ? item?.quantity * item?.product.price : 0);

    useEffect(() => {
        if (item) {
            setSubtotal(item?.quantity * item?.product.price);
        }
    }, [item])

    const rmvItemFromCart = () => {
        dispatch({ type: "REMOVE_FROM_CART", productId });
    };

    return { rmvItemFromCart, subtotal };
};