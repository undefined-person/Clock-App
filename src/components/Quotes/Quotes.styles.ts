import styled from 'styled-components'

export const QuotesContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const QuoteWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

export const Quote = styled.p`
  font-size: 18px;
  line-height: 28px;
`

export const Author = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  margin-top: 13px;
`

export const RefreshButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 5px;

  &:hover svg path {
    transition: all 0.5s ease-in-out;
    opacity: 1;
  }
`
