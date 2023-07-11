import * as S from "./style";
import CartSVG from "../../assets/shoppingCart.svg";

export const CardProductHome = () => {
    return (
        <S.CardProduct>
            <S.ImgCardContainer>
                <S.ImgCard src="https://wefit-react-web-test.s3.amazonaws.com/the-batman.png" />
            </S.ImgCardContainer>
            <S.InfoCard>
                <h2>Viúva Negra</h2>
                <h1>R$ 9,99</h1>
            </S.InfoCard>
            <S.AddToCartButton>
                <S.CartButtonWrapper>
                    <S.CartSVG src={CartSVG} />
                    <h2>0</h2>
                </S.CartButtonWrapper>
                <S.ButtonTxt>ADICIONAR AO CARRINHO</S.ButtonTxt>
            </S.AddToCartButton>
        </S.CardProduct>
    );
};