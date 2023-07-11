import styled from "styled-components";
import { media } from "../../themes/media";

export const UpdateContainer = styled.div`
    ${media.SMARTPHONE`
        display: flex;
        width: 60%;
    `}
`;

export const Input = styled.input`
    border-radius: 4px;
    width: 100%;
    height: fit-content;
    border: 1px solid #D9D9D9;
    font-size: 1rem;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    box-sizing: border-box;
    padding-left: 1rem;
`;

export const InputContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    margin: 0 0.5rem;
`;


export const ButtonsSVGs = styled.img`
    cursor: pointer;
    
    ${media.SMARTPHONE`
        width: 1.2rem;
    `}
`;