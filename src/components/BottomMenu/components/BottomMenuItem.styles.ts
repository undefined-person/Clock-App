import styled from 'styled-components'

import { theme } from 'core/theme'

export const BottomMenuItemStyles = styled.div<{ isDay: boolean }>`
  color: ${(props) =>
    props.isDay ? theme.colors.darkGray : theme.colors.white};

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;
  }
`

export const BottomMenuTitle = styled.h4`
  font-size: 15px;
  line-height: 28px;
  letter-spacing: 3px;
  text-transform: uppercase;

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    font-size: 10px;
    letter-spacing: 2px;
  }
`

export const BottomMenuSubtitle = styled.h5`
  font-weight: 700;
  font-size: 56px;
  line-height: 68px;

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    font-size: 20px;
    line-height: 24px;
  }
`
