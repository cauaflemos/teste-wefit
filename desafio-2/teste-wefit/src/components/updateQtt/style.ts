import styled from "styled-components";
import { media } from "../../themes/media";

export const UpdateContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    
    ${media.SMARTPHONE`
        width: 60%;
    `}
`;

export const Input = styled.input`
    border-radius: 4px;
    width: 100%;
    height: fit-content;
    border: 1px solid #D9D9D9;
    font-size: 0.8rem;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    box-sizing: border-box;
    padding: 0.2rem 0 0.2rem 1rem;
    color: #2F2E41;
    
    ${media.SMARTPHONE`
        font-size: 1rem;
        padding: 0 0 0 1rem;
    `}
`;

export const InputContainer = styled.div`
    height: 100%;
    width: 33%;
    display: flex;
    align-items: center;
    margin: 0.35rem 0.5rem;
    
    ${media.SMARTPHONE`
        margin: 0 0.5rem;
        width: 50%;
    `}
`;


export const ButtonsSVGs = styled.img`
    cursor: pointer;
    
    ${media.SMARTPHONE`
        width: 1.2rem;
    `}
`;