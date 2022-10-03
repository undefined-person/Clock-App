import styled from 'styled-components'

export const ContainerStyles = styled.div<{ image: string }>`
  height: 100vh;
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  padding: 56px 165px 98px;
  background-size: cover;
`
