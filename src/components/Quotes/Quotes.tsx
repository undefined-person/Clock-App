import React from 'react'

import {
  Author,
  Quote,
  QuotesContainer,
  QuoteWrapper,
  Refresh,
} from './Quotes.styles'

import RefreshIcon from 'assets/images/icons/icon-refresh.svg'

export const Quotes = () => {
  return (
    <QuotesContainer>
      <QuoteWrapper>
        <Quote>
          “The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value.”
        </Quote>
        <Refresh src={RefreshIcon} alt="" />
      </QuoteWrapper>
      <Author>Ada Lovelace</Author>
    </QuotesContainer>
  )
}
