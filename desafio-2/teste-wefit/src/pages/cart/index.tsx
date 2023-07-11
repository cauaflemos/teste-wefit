import { CardProductCart } from "../../components/cardProductCart";
import { EmptyCart } from "../../components/emptyCart";
import { Header } from "../../components/header";
import { TotalOrder } from "../../components/totalOrder";
import { CartContext } from "../../context/cartContext";
import * as S from "./style";
import { useContext } from 'react';

export const CartPage = () => {
    const { state } = useContext(CartContext);

    return (
        <>
            <Header />
            <S.CartContainer>
                
                    {state.items.length === 0 ? 
                        <S.ShowcaseEmptyCart>
                            <EmptyCart /> 
                        </S.ShowcaseEmptyCart>
                    :
                        <S.Showcase>
                            {state.items.map((e) => {
                                return (
                                    <CardProductCart key={`CardProductCart=${e.product.id}`} id={e.product.id} image={e.product.image} price={e.product.price} title={e.product.title} />
                                )
                            })}
                            <TotalOrder />
                        </S.Showcase>
                    }
                
            </S.CartContainer>
        </>
    )
};