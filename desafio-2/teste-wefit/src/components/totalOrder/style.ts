import { styled } from "styled-components";
import { media } from "../../themes/media";

export const TotalOrderContainer = styled.div`
    border-top: 1px #999999 solid;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    ${media.SMARTPHONE`
        display: block;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        padding: 0 1rem 1rem 1rem;
    `}
`;

export const PriceContainer = styled.div`
    background-color: red;
    display: flex;
    align-items: center;
    h2 {
        color: #2F2E41;
        font-family: 'Open Sans';
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        padding: 0 1rem;
    }
    h3 {
        font-size: 0.87rem;
        color: #999;
        text-align: center;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    ${media.SMARTPHONE`
        width: 100%;
        border-top: 1px #999999 solid;
        text-align: end;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 1rem 0 0.8rem 0;
        h2 {
            color: #2F2E41;
            font-family: 'Open Sans';
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            padding: 0 1rem;
        }
        h3 {
            font-size: 0.87rem;
            color: #999;
            text-align: center;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
    `}
`;

export const FinishButton = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background: #009EDD;
    padding: 1rem 0;
    width: 30%;

    h2 {
        color: #FFF;
        text-align: center;
        font-family: 'Open Sans';
        font-size: 0.87rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    ${media.SMARTPHONE`
        width: 100%;
        padding: 1rem 0;

        h2 {
            color: #FFF;
            text-align: center;
            font-family: 'Open Sans';
            font-size: 0.87rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
    `}
`;