import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IQuote } from '../models'

export const quotesAPI = createApi({
  reducerPath: 'quotesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_QUOTES_API_URL,
  }),
  endpoints: (build) => ({
    fetchQuote: build.query<IQuote, void>({
      query: () => ({
        url: ``,
      }),
    }),
  }),
})
