import styled from "styled-components";
import { media } from "../../themes/media";

export const Empty = styled.img`
    ${media.SMARTPHONE`
        width: 100%;
    `}
`;

export const Checkout = styled.img`
    ${media.SMARTPHONE` 
        width: 90%;
    `}
`;

export const InfoMessageWrapper = styled.div`
    text-align: center;
    display: grid;
    place-items: center;

    ${media.SMARTPHONE`
        display: block;
    `}
`;

export const InfoMessageTxt = styled.h1`
    color: #2F2E41;
    font-weight: 700;
    font-size: 1.3rem;
    margin-bottom: 1.8rem;
    br {
        display: none;
    }

    ${media.SMARTPHONE`
        br {
            display: block;
        }
        margin-bottom: 1.3rem;
    `}
`;

export const InfoMessageButton = styled.button`
    border: none;
    background-color: #009EDD;
    padding: 0.7rem 0;
    border-radius: 4px;
    width: 19%;
    margin-top: 2rem;
    cursor: pointer;

    :hover {
        opacity: 0.6;
        transition: all 0.3s;
    }

    h2 {
        color: #fff;
        text-align: center;
        font-family: 'Open Sans';
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    ${media.SMARTPHONE`
        width: 50%;
        margin-top: 2rem;
    `}
`;