import styled from "styled-components";
import { media } from "../../themes/media";

export const HeaderContainer = styled.header`
    width: 100vw;
    display: flex;
    justify-content: center;
`;

export const HeaderWrapper = styled.section`
    width: 65vw;
    height: 9.25vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.SMARTPHONE`
        width: 95%;
    `}
`;

export const Logo = styled.div`
    user-select: none;
    cursor: pointer;
    
    h1 {
        font-family: 'Open Sans';
        color: #fff;
        font-size: 1.2rem;
        font-weight: 700;
    }
`;

export const CartContainer = styled.div`
    display: flex;
    user-select: none;
    cursor: pointer;
`;

export const CartInfoWrapper = styled.div`
    display: grid;
    text-align: right;
    margin-right: 1rem;
    h2 {
        font-weight: 600;
        color: #fff;
        font-size: 0.85rem;
    }

    h3 {
        color: #999999;
        font-weight: 600;
        font-size: 0.7rem;
    }

    ${media.SMARTPHONE`
        justify-content: center;
        align-items: center;
        display: flex;
        h2 {
            display: none;
        }
    `}
`;

export const CartSVG = styled.img`
    width: 2.1rem;
`;  