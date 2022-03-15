import { useParams } from 'react-router';
import { Div, Button, Container } from 'atomize';
import Hero from '../../components/hero';
import Header from '../../components/header';
import Footer from '../../components/footer';
import GetCurriculum from '../../components/getCurriculum';

export default function Subject() {
  const { grade, subject, section } = useParams();

  const sections = GetCurriculum(grade, subject);

  let units = [];


  sections.map((sect) => {
    if (sect.Section.toString() === section) {
      units = sect.Units;
    }
    return null;
  })

  // Uppercase the first character of the subject.
  const niceSubject = `${subject}`.charAt(0).toUpperCase() + `${subject}`.slice(1);

  return (
    <Container>
      <Header />
      <Hero 
        title={`Grade ${grade} - ${niceSubject} - ${section}`}
        sub="Choose a Unit"
      />

      <Div
        d="flex"
        flexWrap="wrap"
        justify="center"
        m={{ y: "1rem"}}
      >
        {units.map((unit) => (
          <a href={`/practice/${grade}/${subject}/${section}/${unit.Unit}`} key={unit.Unit}>
            <Button
              h="11rem"
              w="15rem"
              p="1.75rem"
              m="1rem"
              textSize="body"
              textColor="info700"
              hoverTextColor="info900"
              bg="white"
              hoverBg="info200"
              border="1px solid"
              borderColor="info700"
              hoverBorderColor="info900"
            >
              {unit.Unit}
              <br />
              {unit.Description}
            </Button>
          </a>
        ))}
      </Div>
      <Footer />
    </Container>
  )
}