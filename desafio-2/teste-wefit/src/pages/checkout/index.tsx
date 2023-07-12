import { InfoMessage } from "../../components/infoMessage";
import { Header } from "../../components/header";
import * as S from "./style";
import { useContext, useEffect } from 'react';
import { CartContext } from "../../context/cartContext";
export const CheckoutPage = () => {
    const { dispatch } = useContext(CartContext);

    useEffect(() => {
        dispatch({ type: "RESET_CART" });
    }, [])
    
    return (
        <>
            <Header />
            <S.CheckoutContainer>
                <S.MainContentContainer>
                    <InfoMessage type="CHECKOUT" />
                </S.MainContentContainer>
            </S.CheckoutContainer>
        </>
    )
};