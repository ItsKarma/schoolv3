import { useParams } from 'react-router';
import { Container } from 'atomize';
import Header from '../../components/header';
import Hero from '../../components/hero';
import QuestionBox from '../../components/questionBox';
import Footer from '../../components/footer';

export default function Unit () {
  const { grade, subject, section, unit } = useParams();

  // let form = {question: "Loading Question...", formula: "Loading Formula...", answer: "Loading Answer...", explanation: ""}
  const niceSubject = `${subject}`.charAt(0).toUpperCase() + `${subject}`.slice(1);

  // let question = document.getElementById('question');
  // question.innerHTML = form.question;
  // let answer= document.getElementById('answer')
  // answer.innerHTML = form.answer;

  return (
    <Container>
    <Header />
    <Hero 
      title={`Grade ${grade} - ${niceSubject} - ${section}.${unit}`}
    />
    <QuestionBox
      grade={grade}
      subject={subject}
      section={section}
      unit={unit}
    />
    <Footer />
    </Container>
  )
}
