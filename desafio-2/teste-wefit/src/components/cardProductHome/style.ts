import styled from "styled-components";

export const CardProduct = styled.div`
    background-color: #fff;
    border-radius: 4px;
    padding: 0.8rem;
    display: flex;
    flex-direction: column;
`;

type AddToCartButtonType = string | "ADICIONAR AO CARRINHO" | "ITEM ADICIONADO"

export const AddToCartButton = styled.button<{ type: AddToCartButtonType }>`
    background-color: ${({type}) => type === "ADICIONAR AO CARRINHO" ? "#009EDD" : "#039B00"};
    transition: background-color 0.2s;
    border-radius: 4px;
    border: 0;
    padding: 1.2rem 0.5rem;
    color: #fff;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;


export const ButtonTxt = styled.h2`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 0.75rem;
    text-align: center;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 0.5rem;
    @media (min-width: 1800px) {
        margin-left: 3rem;
    }
`;

export const CartButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        margin-right: 1rem;
        font-weight: 400;
        font-size: 0.75rem;
        font-family: 'Open Sans';
        font-style: normal;
        line-height: normal;
    }
`;

export const CartSVG = styled.img`
    width: 0.9rem;
`;

export const InfoCard = styled.div`
    margin: 0.6rem 0;
    text-align: center;
    h2 {
        font-size: 1rem;
        font-weight: 700;
        color: #333333;
        line-height: normal;
        font-style: normal;
    }
    h1 {
        color: #2F2E41;
        font-weight: 700;
        font-size: 1.2rem;
        line-height: normal;
        font-style: normal;
    }
`;

export const ImgCardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ImgCard = styled.img`
    width: 45%;
`;

export const ButtonContent = styled.div`
    position: absolute;
    left: 15%;
    display: flex;
`;