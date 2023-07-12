import { ReactNode } from "react";
import { IProduct } from "../../../interfaces";

export interface CartItem {
    product: IProduct;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
}

interface IActionUpdateQtt {
    productId: number;
    quantity: number;
}

export type ActionType =
    | { type: 'ADD_TO_CART'; product: IProduct }
    | { type: 'REMOVE_FROM_CART'; productId: number }
    | { type: 'UPDATE_ITEM'; payload: IActionUpdateQtt }
    | { type: 'RESET_CART'; }
    | { type: 'DECREMENT_ITEM'; productId: number };

export interface CartProviderProps {
    children: ReactNode;
}
    