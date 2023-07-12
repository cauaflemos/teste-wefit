import styled from "styled-components";
import { media } from "../../themes/media";

export const ShowcaseEmptyCart = styled.div`
    width: 66.67vw;
    margin-top: 3vh;
    background-color: #fff;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    padding: 4.5rem 0;
    flex-direction: column;

    ${media.SMARTPHONE`
        margin: 0 0 1.5rem 0;
        width: 90%;
        display: flex;
        flex-direction: column;
        padding: 3.5rem 0;
    `}
`;


export const Showcase = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    max-height: 50vh;
    overflow-y: auto;

`;

export const CartContent = styled.div`
    width: 66.67vw;
    margin-top: 3vh;
    background-color: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 1.5rem;

    :last-child {
        margin: 0;
    }
    
    ${media.SMARTPHONE`
        margin: 0 0 1.5rem 0;
        width: 90%;
        display: flex;
        position: relative;
        flex-direction: column;
        padding: 1rem;
        justify-content: space-between;
        height: 88vh;
    `}
`;

export const CartContainer = styled.section`
    width: 100vw;  
    display: flex;
    justify-content: center;
`;
