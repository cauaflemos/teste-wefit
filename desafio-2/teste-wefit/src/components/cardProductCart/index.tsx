import { IProduct } from "../../interfaces";
import TrashSVG from "../../assets/trashCan.svg";
import * as S from "./style";
import { UpdateQtt } from "../updateQtt";
import { cardCartActions } from "./bl";

interface ICardProductCartProps extends IProduct {
    idx: number;
    scrollIsActive: string | "OFF" | "ON";
}

export const CardProductCart = (props: ICardProductCartProps) => {

    const {
        rmvItemFromCart,
        subtotal
    } = cardCartActions(props.id);

    return (
        <S.CardContainer>
            <S.ProductSVGMob src={props.image} />
            <S.InfoCardMob>
                <S.InfoTitleMob>
                    <h2>{props.title}</h2>
                    <S.TrashAndPriceContainerMob>
                        <h2>R$ {props.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>
                        <S.TrashCanMob 
                            onClick={() => rmvItemFromCart()}
                            src={TrashSVG}
                        />
                    </S.TrashAndPriceContainerMob>
                </S.InfoTitleMob>
                <S.InfoTitleMob>
                    <UpdateQtt id={props.id} image={props.image} price={props.price} title={props.title} />
                    <S.SubtotalContainerMob>
                        <h3>SUBTOTAL</h3>
                        <h2>R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>
                    </S.SubtotalContainerMob>
                </S.InfoTitleMob>
            </S.InfoCardMob>

            <S.ProductContainerDesk>
                {props.idx === 0 &&
                    <S.TableTitleContainerDesk>
                        <h1>PRODUTO</h1>
                    </S.TableTitleContainerDesk>
                }
                <S.ProductContentContainerDesk>
                    <S.ProductSVGDesk src={props.image} />
                    <S.ProductInfoWrapperDesk>
                        <h3>{props.title}</h3>
                        <h2>R$ {props.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>
                    </S.ProductInfoWrapperDesk>
                </S.ProductContentContainerDesk>
            </S.ProductContainerDesk>
            <S.QuantityContainerDesk>
                {props.idx === 0 &&
                    <S.TableTitleContainerDesk>
                        <h1>QTD</h1>
                    </S.TableTitleContainerDesk>
                }
                <S.UpdateQttContainerDesk>
                    <UpdateQtt id={props.id} image={props.image} price={props.price} title={props.title}  />
                </S.UpdateQttContainerDesk>
            </S.QuantityContainerDesk>
            <S.SubtotalContainerDesk>
                {props.idx === 0 &&
                    <S.TableTitleContainerDesk>
                        <h1>SUBTOTAL</h1>
                    </S.TableTitleContainerDesk>
                }
                <S.SubtotalContentDesk>
                    <h2>R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>
                    <S.TrashSVGDesk 
                        src={TrashSVG}
                        status={props.scrollIsActive}
                        onClick={() => rmvItemFromCart()}
                    />
                </S.SubtotalContentDesk>
            </S.SubtotalContainerDesk>
        </S.CardContainer>
    );
};