import React, { FC } from 'react'

import { useAppBackground } from 'core/hooks/useAppBackground'

import { ContainerStyles } from './Container.styles'

interface ContainerProps {
  children: React.ReactNode
}

export const Container: FC<ContainerProps> = ({ children }) => {
  const backgroundImage = useAppBackground()
  return <ContainerStyles image={backgroundImage}>{children}</ContainerStyles>
}
