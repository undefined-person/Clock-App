import React from 'react'

import { useAppSelector, useIsDay } from 'core/hooks'
import { timeAPI } from 'core/services'

import { BottomMenuItem } from './components/BottomMenuItem'

import { BottomMenuColumn, BottomMenuContainer } from './BottomMenu.styles'

export const BottomMenu = () => {
  const { isOpen } = useAppSelector((state) => state.menu)
  const { data } = timeAPI.useFetchTimeQuery()
  const { isDay } = useIsDay()

  return (
    <BottomMenuContainer isOpen={isOpen} isDay={isDay}>
      <BottomMenuColumn>
        <BottomMenuItem title="CURRENT TIMEZONE" subtitle={data!.timezone} />
        <BottomMenuItem title="Day of the year" subtitle={data!.day_of_year} />
      </BottomMenuColumn>
      <BottomMenuColumn>
        <BottomMenuItem
          title="Day of the week"
          subtitle={data!.datetime.weekdayLong}
        />
        <BottomMenuItem title="Week number" subtitle={data!.week_number} />
      </BottomMenuColumn>
    </BottomMenuContainer>
  )
}
