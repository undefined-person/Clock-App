import styled from 'styled-components'

import { theme } from 'core/theme'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`

export const Greeting = styled.div`
  display: flex;
  align-items: center;
`

export const GreetingText = styled.h2`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-left: 16px;

  @media screen and (max-width: ${theme.breakpoints.md}) {
    font-size: 18px;
    letter-spacing: 3.6px;
  }

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 3px;
  }
`

export const TimeContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 11px;
`

export const Time = styled.h1`
  font-weight: 700;
  font-size: 200px;
  line-height: 150px;
  letter-spacing: -5px;

  @media screen and (max-width: ${theme.breakpoints.md}) {
    font-size: 175px;
    line-height: 120px;
    letter-spacing: -4.375px;
  }

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    font-size: 100px;
    line-height: 90px;
    letter-spacing: -2.5px;
  }
`

export const Abbreviation = styled.span`
  font-weight: 300;
  font-size: 40px;
  line-height: 28px;
  text-transform: uppercase;

  @media screen and (max-width: ${theme.breakpoints.md}) {
    font-size: 32px;
  }

  @media screen and (max-width: ${theme.breakpoints.md}) {
    font-size: 15px;
  }
`
