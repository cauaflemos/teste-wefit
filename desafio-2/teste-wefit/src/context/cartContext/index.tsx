import { createContext, useReducer, Dispatch, FC } from "react";
import { ActionType, Cart, CartItem, CartProviderProps } from "./interfaces";

let initialCartState: Cart = {
    items: [],
};

const cartReducer = (state: Cart, action: ActionType) => {
    let updatedItems: CartItem[] = [];
    switch (action.type) {
        case 'ADD_TO_CART':
            let item = state.items.find(e => e.product.id === action.product.id);
            if(item) {
                updatedItems = state.items.map(e =>
                    e.product.id === action.product.id
                        ? { ...e, quantity: e.quantity + 1 }
                        : e
                );
            } else {
                updatedItems = [...state.items, { product: action.product, quantity: 1 }];
            }
            return { ...state, items: updatedItems };
        case 'REMOVE_FROM_CART':
            updatedItems = state.items.filter(e => e.product.id !== action.productId);
            return { ...state, items: updatedItems };
        case 'UPDATE_ITEM':
            let itemToChange = state.items.find(e => e.product.id === action.payload.productId);
            if (itemToChange) {
                updatedItems = state.items.map(e =>
                    e.product.id === action.payload.productId
                        ? { ...e, quantity: action.payload.quantity }
                        : e
                );
            }
            return { ...state, items: updatedItems };
        case 'DECREMENT_ITEM':
            let lastUnity = state.items.find(e => e.product.id === action.productId);

            if (lastUnity && lastUnity.quantity === 1) {
                updatedItems = state.items.filter(e => e.product.id !== action.productId);
                return { ...state, items: updatedItems };
            } 

            updatedItems = state.items.map(e =>
                e.product.id === action.productId && e.quantity > 1
                    ? { ...e, quantity: e.quantity - 1 }
                    : e
            );
            updatedItems = updatedItems.filter(e => e.quantity > 0);
            return { ...state, items: updatedItems };
        default:
            return state;
    }
};

export const CartContext = createContext<{
    state: Cart;
    dispatch: Dispatch<ActionType>;
}>({
    state: initialCartState,
    dispatch: () => null
});

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialCartState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
