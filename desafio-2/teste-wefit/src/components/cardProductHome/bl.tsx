import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { IProduct } from "../../interfaces";
import { useState } from "react";

export const useAddToCartButton = () => {
    const { dispatch } = useContext(CartContext);
    const [buttonText, setButtonText] = useState<string>("ADICIONAR AO CARRINHO");
    const [isAddable, setIsAddable] = useState<boolean>(true);

    const addToCart = (product: IProduct) => {
        if (isAddable) {
            dispatch({ type: "ADD_TO_CART", product });
            setButtonText("ITEM ADICIONADO");
            setIsAddable(false);
        }

        setTimeout(() => {
            setButtonText("ADICIONAR AO CARRINHO");
            setIsAddable(true);
        }, 500);
    };

    return { buttonText, addToCart };
};

export const ItemQuantity = (productId: number) => {
    const { state } = useContext(CartContext);

    const item = state.items.find(e => e.product.id === productId);

    if (item) {
        return {
            quantity: item?.quantity
        }
    }
    
    return {
        quantity: 0
    }
}