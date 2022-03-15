import { useParams } from 'react-router';
import { Div, Button, Container } from 'atomize';
import Hero from '../../components/hero';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Grade () {
  let { grade } = useParams();

  const subjects = [
    {id: "math", name: "Math"},
    // {id: "science", name: "Science"},
    // {id: "english", name: "English"},
    // {id: "socialstudies", name: "Social Studies"}
  ]

  return (
    <Container>
      <Header />
      <Hero
        title={`Grade ${grade}`}
        sub="Choose a subject"
      />

      <Div
        d="flex"
        justify="center"
        m={{ y: "1rem"}}>
        {subjects.map((subj) => (
          <a href={`/practice/${grade}/${subj.id}`} key={subj.id}>
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
            {subj.name}
            </Button>
          </a>
        ))}
      </Div>

      <Footer />
    </Container>
  )
}