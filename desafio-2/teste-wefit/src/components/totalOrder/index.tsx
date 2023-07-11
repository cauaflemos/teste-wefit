import { totalOrderActions } from "./bl";
import * as S from "./style";

export const TotalOrder = () => {

    const {
        totalOrderValue
    } = totalOrderActions();

    return (
        <S.TotalOrderContainer>
            <S.PriceContainer>
                <h3>TOTAL</h3>
                <h2>R$ {totalOrderValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>
            </S.PriceContainer>
            <S.FinishButton>
                <h2>FINALIZAR PEDIDO</h2>
            </S.FinishButton>
        </S.TotalOrderContainer>
    );
};