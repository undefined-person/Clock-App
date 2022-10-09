import styled from 'styled-components'

import { theme } from 'core/theme'

export const BottomMenuContainer = styled.div<{
  isOpen: boolean
  isDay: boolean
}>`
  position: absolute;
  right: 0;
  left: 0;
  height: 50vh;
  padding: 0 20px;
  bottom: ${(props) => (props.isOpen ? 0 : '-50%')};
  background: ${(props) =>
    props.isDay ? theme.colors.whiteBlur : theme.colors.blackBlur};
  backdrop-filter: blur(20.3871px);
  transition: all 1s;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;

  @media screen and (max-width: ${theme.breakpoints.md}) {
    height: 45vh;
  }

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const BottomMenuColumn = styled.div`
  display: flex;
  row-gap: 42px;
  flex-direction: column;

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    row-gap: 0;
  }
`
