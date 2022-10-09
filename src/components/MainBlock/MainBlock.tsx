import React, { useEffect } from 'react'
import { DateTime } from 'luxon'

import { timeAPI } from 'core/services'
import { getGreeting } from 'core/utils'
import { useIsDay, useWindowSize } from 'core/hooks'
import { resolutions } from 'core/data'

import SunIcon from 'assets/images/icons/icon-sun.svg'
import MoonIcon from 'assets/images/icons/icon-moon.svg'

import {
  Greeting,
  MainContainer,
  Time,
  GreetingText,
  TimeContainer,
  Abbreviation,
} from './MainBlock.styles'

export const MainBlock = () => {
  const { data, refetch, isLoading } = timeAPI.useFetchTimeQuery()
  const { isDay } = useIsDay()
  const { width } = useWindowSize()

  useEffect(() => {
    let interval = 0
    if (!isLoading) {
      interval = (60 - data!.datetime.second) * 1000
    }
    const refetchInterval = setInterval(() => {
      refetch()
    }, interval)

    return () => clearInterval(refetchInterval)
  }, [data])

  return (
    <MainContainer>
      <Greeting>
        <img src={isDay ? SunIcon : MoonIcon} alt="" />
        <GreetingText>
          {getGreeting(data!.datetime.hour)}{' '}
          {width > resolutions.sm && ', IT’S CURRENTLY'}
        </GreetingText>
      </Greeting>
      <TimeContainer>
        <Time>{data!.datetime.toLocaleString(DateTime.TIME_24_SIMPLE)}</Time>
        <Abbreviation>{data!.abbreviation}</Abbreviation>
      </TimeContainer>
    </MainContainer>
  )
}
