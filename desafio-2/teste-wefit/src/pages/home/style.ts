import styled from "styled-components";
import { media } from "../../themes/media";

export const HomeContainer = styled.body`
    width: 100vw;  
    display: flex;
    justify-content: center;
`;

export const Showcase = styled.section`
    width: 66.67vw;
    margin-top: 3vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 15px;

    ${media.SMARTPHONE`
        margin: 0 0 1.5rem 0;
        width: 90%;
        display: flex;
        flex-direction: column;
    `}
`;