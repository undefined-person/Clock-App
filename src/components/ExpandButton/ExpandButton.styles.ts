import styled from 'styled-components'

import { theme } from 'core/theme'

export const ArrowWrapper = styled.span`
  background-color: ${theme.colors.darkGray};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.5s;

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    width: 32px;
    height: 32px;
  }
`

export const ExpandBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 146px;
  height: 56px;
  border-radius: 32px;
  border: none;
  cursor: pointer;

  &:hover ${ArrowWrapper} {
    @media (hover: hover) and (pointer: fine) {
      background-color: ${theme.colors.lightGray};
    }
  }

  @media screen and (max-width: ${theme.breakpoints.md}) {
    margin-top: 80px;
  }

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    width: 115px;
    height: 39px;
  }
`

export const ExpandText = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${theme.colors.black};
  mix-blend-mode: normal;
  opacity: 0.5;

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 3.75px;
  }
`

export const ArrowImg = styled.img<{ isOpen: boolean }>`
  transition: all 0.5s;
  transform: ${(props) => (props.isOpen ? `rotate(0)` : ` rotate(-180deg)`)};
`
