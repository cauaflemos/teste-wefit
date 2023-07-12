import * as S from "./style";
import CartSVG from "../../assets/shoppingCart.svg";
import { IProduct } from "../../interfaces";
import { ItemQuantity, useAddToCartButton } from "./bl";

export const CardProductHome = (product: IProduct) => {
    const { 
        buttonText, 
        addToCart
    } = useAddToCartButton();

    const {
        quantity
    } = ItemQuantity(product.id);

    return (
        <S.CardProduct>
            <S.ImgCardContainer>
                <S.ImgCard src={product.image} />
            </S.ImgCardContainer>
            <S.InfoCard>
                <h2>{product.title}</h2>
                <h1>R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h1>
            </S.InfoCard>
            <S.AddToCartButton type={buttonText} onClick={() => addToCart(product)}>
                <S.ButtonContent>
                    <S.CartButtonWrapper>
                        <S.CartSVG src={CartSVG} />
                        <h2>{quantity}</h2>
                    </S.CartButtonWrapper>
                    <div>
                        <S.ButtonTxt>{buttonText}</S.ButtonTxt>
                    </div>
                </S.ButtonContent>
            </S.AddToCartButton>
        </S.CardProduct>
    );
};