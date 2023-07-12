import styled from "styled-components";
import { media } from "../../themes/media";

export const CheckoutContainer = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
`;

export const MainContentContainer = styled.div`
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