import * as S from "./style";
import CartSvg from "../../assets/cart.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <S.HeaderContainer>
            <S.HeaderWrapper>
                <S.Logo onClick={() => navigate('/')}>
                    <h1>WeMovies</h1>
                </S.Logo>
                
                <S.CartContainer onClick={() => navigate('/cart')}>
                    <S.CartInfoWrapper>
                        <h2>Meu carrinho</h2>
                        <h3>0 itens</h3>
                    </S.CartInfoWrapper>
                    <S.CartSVG src={CartSvg} />
                </S.CartContainer>
            </S.HeaderWrapper>
        </S.HeaderContainer>
    );
};