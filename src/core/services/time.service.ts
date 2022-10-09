import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DateTime } from 'luxon'

import { ITime } from 'core/models'

export const timeAPI = createApi({
  reducerPath: 'timeAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_TIME_API_URL,
  }),
  endpoints: (build) => ({
    fetchTime: build.query<ITime, void>({
      query: () => ({
        url: ``,
      }),
      transformResponse: (response: ITime) => {
        return {
          ...response,
          datetime: DateTime.fromISO(response.datetime as unknown as string),
        }
      },
    }),
  }),
})
