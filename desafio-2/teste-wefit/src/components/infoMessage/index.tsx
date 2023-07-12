import { useNavigate } from "react-router-dom";
import EmptySVG from "../../assets/emptyCart.svg";
import CheckoutSVG from "../../assets/checkout.svg";
import * as S from "./style";

interface IInfoMessageProps {
    type: "CHECKOUT" | "CART"
}

export const InfoMessage = ({ type }: IInfoMessageProps) => {
    const navigate = useNavigate();

    return (
        <S.InfoMessageWrapper>
            {type === "CART" ? 
                <S.InfoMessageTxt>
                    Parece que não <br /> há nada por aqui :(
                </S.InfoMessageTxt>
            : 
                <S.InfoMessageTxt>
                    Compra realizada <br /> com sucesso!
                </S.InfoMessageTxt>
            }
            {type === "CART" ? 
                <S.Empty src={EmptySVG} />
            :
                <S.Checkout src={CheckoutSVG} />
            }
            <S.InfoMessageButton onClick={() => navigate("/")}>
                <h2>VOLTAR</h2>
            </S.InfoMessageButton>
        </S.InfoMessageWrapper>
    );
};
