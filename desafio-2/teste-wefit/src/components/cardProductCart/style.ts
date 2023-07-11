import styled from "styled-components";
import { media } from "../../themes/media";

export const CardContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0 0 1.8rem 0;
    ${media.SMARTPHONE`
        padding: 0;
        margin-bottom: 0.8rem;
        display: flex;
    `}
`;

export const ProductSVG = styled.img`
    width: 8%;

    ${media.SMARTPHONE`
        width: 20%;
        margin-right: 1rem;
    `}
`;

export const InfoCardMob = styled.div`
    display: none;
    ${media.SMARTPHONE`
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0.2rem 0;
        justify-content: space-between;
    `}
`;

export const InfoTitleMob = styled.div`
    display: none;
    ${media.SMARTPHONE`
        width: 100%;
        display: flex;
        justify-content: space-between;

        h2 {
            color: #2F2E41;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            font-size: 0.9rem;
        }
    `}
`;

export const TrashCanMob = styled.img`
    display: none;
    ${media.SMARTPHONE`
        display: block;
        cursor: pointer;
    `}
`;

export const SubtotalContainerMob = styled.div`
    display: none;
    ${media.SMARTPHONE`
        display: block;
        text-align: end;
        h3 {
            color: #999;
            font-family: 'Open Sans';
            font-size: 0.68rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
        h2 {
            color: #2F2E41;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            font-size: 0.9rem;
        }
    `}
`;

export const TrashAndPriceContainerMob = styled.div`
    display: none;
    ${media.SMARTPHONE`
        display: flex;
        justify-content: space-between;
        width: 40%;
    `}
`;