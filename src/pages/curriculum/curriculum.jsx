import { Div, Button, Container } from 'atomize';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Hero from '../../components/hero';

export default function Curriculum() {
  const gradeList = [4, 5, 6];
  return (
    <Container>
      <Header />
      <Hero
        title="School v3 Curriculum"
        sub="Select a Grade"
      />
      
      <Div
        d="flex"
        justify="center"
        m={{ y: "1rem"}}>
        {gradeList.map((grade) => (
          <a href={`/practice/${grade}`} key={grade}>
            <Button
              h="4rem"
              p={{ x: "1.75rem" }}
              m={{ x: "1rem" }}
              textSize="body"
              textColor="info700"
              hoverTextColor="info900"
              bg="white"
              hoverBg="info200"
              border="1px solid"
              borderColor="info700"
              hoverBorderColor="info900"
            >
            {grade}
            </Button>
          </a>
        ))}
      </Div>

      <Footer />
    </Container>
  )
}
