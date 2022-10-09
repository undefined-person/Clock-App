import styled from 'styled-components'

import { theme } from 'core/theme'

export const LoaderWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.darkGray};
`

export const LoaderContent = styled.span`
  width: 75px;
  height: 75px;
  display: inline-block;
  position: relative;

  &::after,
  &::before {
    content: '';
    box-sizing: border-box;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: 2px solid #fff;
    position: absolute;
    left: 0;
    top: 0;
    animation: animloader 2s linear infinite;
  }
  &::after {
    animation-delay: 1s;
  }

  @keyframes animloader {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`
