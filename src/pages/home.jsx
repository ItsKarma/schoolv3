import { Container, } from 'atomize';
import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero';

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero
        title="Welcome to School v3"
        sub="Because Education Should Be Free"
      />
      <Footer />
    </Container>
  )
}
