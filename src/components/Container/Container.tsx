import React, { FC } from 'react'

import DayBackground from '../../assets/images/desktop/bg-image-daytime.jpg'
import { ContainerStyles } from './Container.styles'

interface ContainerProps {
  children: React.ReactNode
}
export const Container: FC<ContainerProps> = ({ children }) => {
  return <ContainerStyles image={DayBackground}>{children}</ContainerStyles>
}

export default Container
