import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { quotesAPI } from '../services/quotes.service'

const rootReducer = combineReducers({
  [quotesAPI.reducerPath]: quotesAPI.reducer,
})

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(quotesAPI.middleware),
  })

export type AppStore = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof setupStore>
export type AppDispatch = AppState['dispatch']
