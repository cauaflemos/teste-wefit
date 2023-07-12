import styled from "styled-components";
import { media } from "../../themes/media";

export const CardContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0 0 1rem 0;
    display: flex;

    ${media.SMARTPHONE`
        padding: 0;
        margin-bottom: 0.8rem;
    `}
`;

// * Mobile

export const ProductSVGMob = styled.img`
    display: none;
    ${media.SMARTPHONE`
        display: block;
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

// * Desktop

export const ProductContainerDesk = styled.div`
    width: 50%;
    ${media.SMARTPHONE`
        display: none;
    `}
`;
export const QuantityContainerDesk = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;

    ${media.SMARTPHONE`
        display: none;
    `}
`;
export const SubtotalContainerDesk = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;

    ${media.SMARTPHONE`
        display: none;
    `}
`;

export const TableTitleContainerDesk = styled.div`
    margin-bottom: 1.47rem;
    h1 {
        color: #999;
        font-family: 'Open Sans';
        font-size: 0.87rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;

export const ProductContentContainerDesk = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const ProductInfoWrapperDesk = styled.div`
    h3 {
        color: #2F2E41;
        font-family: 'Open Sans';
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    h2 {
        color: #2F2E41;
        font-family: 'Open Sans';
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        padding-top: 0.5rem;
    }
`;

export const ProductSVGDesk = styled.img`
    width: 20%;
    margin-right: 3rem;
`;

export const UpdateQttContainerDesk = styled.div`
    height: 100%;
    flex: 1;
`;

export const SubtotalContentDesk = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
        color: #2F2E41;
        font-family: 'Open Sans';
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;

type TrashSVGDeskProps = string | "OFF" | "ON";

export const TrashSVGDesk = styled.img<{ status: TrashSVGDeskProps }>`
    cursor: pointer;
    padding-right: ${({ status }) =>  status === "ON" ? "1.5rem" : "0"}

`;