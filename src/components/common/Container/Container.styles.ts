import styled from 'styled-components'

export const ContainerStyles = styled.div<{
  image: string
}>`
  height: 100vh;
  position: relative;
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
`
