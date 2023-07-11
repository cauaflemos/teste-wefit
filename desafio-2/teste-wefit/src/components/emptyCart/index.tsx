import { useNavigate } from "react-router-dom";
import EmptySVG from "../../assets/emptyCart.svg";
import * as S from "./style";

export const EmptyCart = () => {
    const navigate = useNavigate();

    return (
        <S.EmptyCartWrapper>
            <S.EmptyCartTxt>
                Parece que não <br /> há nada por aqui :(
            </S.EmptyCartTxt>
            <S.CartSVG src={EmptySVG} />
            <S.EmptyCartButton onClick={() => navigate("/")}>
                <h2>VOLTAR</h2>
            </S.EmptyCartButton>
        </S.EmptyCartWrapper>
    );
};
