import { CardProductCart } from "../../components/cardProductCart";
import { InfoMessage } from "../../components/infoMessage";
import { Header } from "../../components/header";
import { TotalOrder } from "../../components/totalOrder";
import { CartContext } from "../../context/cartContext";
import { ShowcaseListener } from "./bl";
import * as S from "./style";
import { useContext } from 'react';

export const CartPage = () => {
    const { state } = useContext(CartContext);

    const {
        ref,
        active
    } = ShowcaseListener();

    return (
        <>
            <Header />
            <S.CartContainer>
                {state.items.length === 0 ? 
                    <S.ShowcaseEmptyCart>
                        <InfoMessage type="CART" /> 
                    </S.ShowcaseEmptyCart>
                :
                    <S.CartContent>
                        <S.Showcase ref={ref}>
                            {state.items.map((e, idx) => {
                                return (
                                    <CardProductCart key={`CardProductCart=${e.product.id}`} id={e.product.id} image={e.product.image} price={e.product.price} title={e.product.title} idx={idx} scrollIsActive={active} />
                                )
                            })}
                        </S.Showcase>
                        <TotalOrder />
                    </S.CartContent>
                }                
            </S.CartContainer>
        </>
    )
};