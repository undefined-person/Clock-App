import {
  Container,
  Quotes,
  MainBlock,
  ExpandButton,
  BottomMenu,
  Content,
  Loader,
  BottomContainer,
} from 'components'

import { useAppSelector } from 'core/hooks'
import { timeAPI } from 'core/services'

const App = () => {
  const { isOpen } = useAppSelector((state) => state.menu)
  const { isLoading } = timeAPI.useFetchTimeQuery()

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <Content isMenuOpen={isOpen}>
            <Quotes />
            <BottomContainer>
              <MainBlock />
              <ExpandButton />
            </BottomContainer>
          </Content>
          <BottomMenu />
        </Container>
      )}
    </>
  )
}

export default App
