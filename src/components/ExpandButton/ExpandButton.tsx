import React from 'react'

import { toggleActive } from 'core/store/slices'
import { useAppDispatch, useAppSelector } from 'core/hooks'

import Arrow from 'assets/images/icons/icon-arrow-down.svg'

import {
  ArrowImg,
  ArrowWrapper,
  ExpandBtn,
  ExpandText,
} from './ExpandButton.styles'

export const ExpandButton = () => {
  const dispatch = useAppDispatch()
  const { isOpen } = useAppSelector((state) => state.menu)

  return (
    <ExpandBtn onClick={() => dispatch(toggleActive())}>
      <ExpandText>{isOpen ? 'LESS' : 'MORE'}</ExpandText>
      <ArrowWrapper>
        <ArrowImg isOpen={isOpen} src={Arrow} alt="" />
      </ArrowWrapper>
    </ExpandBtn>
  )
}
