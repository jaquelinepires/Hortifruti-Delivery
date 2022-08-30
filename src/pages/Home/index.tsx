import { Container } from './styles'
import { SearchForm } from './components/SearchForm'
import { Intro } from './components/Intro'
import { OurFair } from './components/OurFair'

export function Home() {
  return (
    <Container>
      <Intro />
      <SearchForm />
      <OurFair />
    </Container>
  )
}
