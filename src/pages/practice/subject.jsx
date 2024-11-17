import { useState } from "react";
import { useParams } from "react-router";
import { Div, Collapse, Container, Button } from "atomize";
import Hero from "../../components/hero";
import Header from "../../components/header";
import Footer from "../../components/footer";
import GetCurriculum from "../../components/getCurriculum";

export default function Subject() {
  const { grade, subject } = useParams();
  const [expanded, setExpanded] = useState(0);

  const sections = GetCurriculum(grade, subject);

  // Uppercase the first character of the subject.
  const niceSubject = subject.charAt(0).toUpperCase() + subject.slice(1);

  return (
    <Container>
      <Header />
      <Hero title={`Grade ${grade} - ${niceSubject}`} sub="Choose a Section" />

      <Div m={{ y: "1rem" }}>
        {sections.map((section) => (
          <Div key={section.Section}>
            <Button
              m={{ y: ".25rem" }}
              onClick={() => {
                setExpanded(section.Section);
              }}
            >
              {section.Section} - {section.Description}
            </Button>
            <Collapse isOpen={expanded === section.Section ? true : false}>
              {section.Units.map((unit) => (
                <Div
                  p={{ x: "1rem", y: ".25rem" }}
                  bg="gray100"
                  border="1px solid"
                  borderColor="gray400"
                  rounded="lg"
                  key={unit.Unit}
                >
                  <a
                    href={`/practice/${grade}/${subject}/${section.Section}/${unit.Unit}`}
                  >
                    {unit.Unit} - {unit.Description}
                  </a>
                </Div>
              ))}
            </Collapse>
          </Div>
        ))}
      </Div>

      <Footer />
    </Container>
  );
}
