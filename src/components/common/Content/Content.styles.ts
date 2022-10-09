import styled from 'styled-components'

import { theme } from 'core/theme'

export const Content = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 56px 40px;
  max-width: 1440px;
  margin: 0 auto;
  transition: all 1s;
  height: 100%;
  transform: ${(props) =>
    props.isMenuOpen ? 'translateY(-50%)' : 'translateY(0)'};

  @media screen and (max-width: ${theme.breakpoints.md}) {
    padding: ${(props) => (props.isMenuOpen ? '56px 40px 0' : '56px 40px')};
  }

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    padding: ${(props) => (props.isMenuOpen ? '20px 20px 0' : '20px')};
  }
`
