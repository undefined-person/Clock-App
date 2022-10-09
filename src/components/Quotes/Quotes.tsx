import React from 'react'

import { quotesAPI } from 'core/services'

import { RefreshIcon } from 'components'

import {
  Author,
  Quote,
  QuotesContainer,
  QuoteWrapper,
  RefreshButton,
} from './Quotes.styles'

export const Quotes = () => {
  const { data, refetch } = quotesAPI.useFetchQuoteQuery()

  return (
    <QuotesContainer>
      <QuoteWrapper>
        <Quote>“{data?.en}”</Quote>
        <RefreshButton onClick={refetch}>
          <RefreshIcon />
        </RefreshButton>
      </QuoteWrapper>
      <Author>{data?.author}</Author>
    </QuotesContainer>
  )
}
