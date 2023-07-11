import styled, { keyframes } from "styled-components";


const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


export const LoadingContainer = styled.div<{ modalStatus: boolean }>`
    position: fixed;
    display: ${({ modalStatus }) => modalStatus ? "flex" : "none"};
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: fit-content;
    height: fit-content;
    justify-content: center;
    align-items: center;
`;

export const Loading = styled.img`
    user-select: none;
    animation: ${rotateAnimation} 1s infinite linear;
`;