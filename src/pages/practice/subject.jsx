import { useParams } from 'react-router';
import { Div, Button, Container } from 'atomize';
import Hero from '../../components/hero';
import Header from '../../components/header';
import Footer from '../../components/footer';
import GetCurriculum from '../../components/getCurriculum';

export default function Subject() {
  const { grade, subject } = useParams();

  const sections = GetCurriculum(grade, subject);

  // Uppercase the first character of the subject.
  const niceSubject = subject.charAt(0).toUpperCase() + subject.slice(1);

  return (
    <Container>
      <Header />
      <Hero
        title={`Grade ${grade} - ${niceSubject}`}
        sub="Choose a Section"
      />

      <Div
        d="flex"
        justify="center"
        m={{ y: "1rem"}}>
        {sections.map((section) => (
          <a href={`/practice/${grade}/${subject}/${section.Section}`} key={section.Section}>
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
            {section.Section}
            <br />
            {section.Description}
            </Button>
          </a>
        ))}
      </Div>

      <Footer />
    </Container>
  )
}