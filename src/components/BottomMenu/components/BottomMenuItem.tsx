import React, { FC } from 'react'

import { useIsDay } from 'core/hooks'

import {
  BottomMenuItemStyles,
  BottomMenuSubtitle,
  BottomMenuTitle,
} from './BottomMenuItem.styles'

interface BottomMenuItemProps {
  title: string
  subtitle: string | number
}

export const BottomMenuItem: FC<BottomMenuItemProps> = ({
  title,
  subtitle,
}) => {
  const { isDay } = useIsDay()

  return (
    <BottomMenuItemStyles isDay={isDay}>
      <BottomMenuTitle>{title}</BottomMenuTitle>
      <BottomMenuSubtitle>{subtitle}</BottomMenuSubtitle>
    </BottomMenuItemStyles>
  )
}
