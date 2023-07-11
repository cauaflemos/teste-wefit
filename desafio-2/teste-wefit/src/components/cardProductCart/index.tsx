import { IProduct } from "../../interfaces";
import TrashSVG from "../../assets/trashCan.svg";
import * as S from "./style";
import { UpdateQtt } from "../updateQtt";
import { cardCartActions } from "./bl";

export const CardProductCart = (product: IProduct) => {

    const {
        rmvItemFromCart,
        subtotal
    } = cardCartActions(product.id);

    return (
        <S.CardContainer>
            <S.ProductSVG src={product.image} />
            <S.InfoCardMob>
                <S.InfoTitleMob>
                    <h2>{product.title}</h2>
                    <S.TrashAndPriceContainerMob>
                        <h2>R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>
                        <S.TrashCanMob 
                            onClick={() => rmvItemFromCart()}
                            src={TrashSVG}
                        />
                    </S.TrashAndPriceContainerMob>
                </S.InfoTitleMob>
                <S.InfoTitleMob>
                    <UpdateQtt id={product.id} image={product.image} price={product.price} title={product.title} />
                    <S.SubtotalContainerMob>
                        <h3>SUBTOTAL</h3>
                        <h2>R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>
                    </S.SubtotalContainerMob>
                </S.InfoTitleMob>
            </S.InfoCardMob>
        </S.CardContainer>
    );
};