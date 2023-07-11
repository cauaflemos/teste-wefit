import * as S from "./style";
import AddSVG from "../../assets/add.svg";
import RmvSVG from "../../assets/rmv.svg";
import { IProduct } from "../../interfaces";
import { cartActions } from "./bl";

export const UpdateQtt = (product: IProduct) => {
    const { 
        addToCart,
        decrementItem,
        handleChange,
        inputValue,
        handleBlur
    } = cartActions(product.id);
    
    return (
        <S.UpdateContainer>
            <S.ButtonsSVGs src={RmvSVG} onClick={() => decrementItem(product.id)} />
            <S.InputContainer>
                <S.Input
                    type="number"
                    value={inputValue} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </S.InputContainer>
            <S.ButtonsSVGs src={AddSVG} onClick={() => addToCart(product)} />
        </S.UpdateContainer>
    );

};