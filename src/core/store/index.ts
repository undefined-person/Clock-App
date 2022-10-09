import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import { quotesAPI, timeAPI } from 'core/services'
import menuSlice from './slices/menuSlice'

const rootReducer = combineReducers({
  [quotesAPI.reducerPath]: quotesAPI.reducer,
  [timeAPI.reducerPath]: timeAPI.reducer,
  menu: menuSlice,
})

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat([
        quotesAPI.middleware,
        timeAPI.middleware,
      ]),
  })

export type AppStore = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof setupStore>
export type AppDispatch = AppState['dispatch']
