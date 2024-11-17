import { useState, useEffect } from 'react';
import { Container, Div, Button, Icon, Text, Notification } from 'atomize';
import GetQuestion from '../components/getQuestion';

export default function QuestionBox(props) {
  const [answerExpanded, setAnswerExpanded] = useState(false);
  const [hint, setHint] = useState(false);
  const [form, setForm] = useState({})

  const getQuestion = () => {
    setAnswerExpanded(false);
    const resp = GetQuestion(props.grade, props.subject, props.section, props.unit);
    setForm(resp);
  };

  const ShowAnswer = <div>
    <p><span id='formula'>{form.formula}</span> = <span id='answer'>{form.answer}</span></p>
    <p id='explanation'>{form.explanation}</p>
  </div>

  useEffect(() => {
    getQuestion();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Div
      m={{ y:"1rem" }}
      p={{ y:"1rem", x:"2rem" }}
      rounded="md"
      bg="gray100"
      shadow="3"
    >
      <Container d="flex" flexDir="column" align="center">
        <span id='support'>{form.support}</span>
        <p id='question'>{form.question}</p>
      </Container>

      <Div d="flex" justify="right">
      <Button
        h="2.5rem"
        w="2.5rem"
        bg={hint ? "warning900" : "warning700"}
        hoverBg={hint ? "warning800" : "warning600"}
        rounded="circle"
        m={{ r: "1rem" }}
        shadow="2"
        hoverShadow="3"
        onClick={() => { setHint(true); }}
      >
        <Text><b>?</b></Text>
      </Button>
      <Notification
        isOpen={hint}
        onClose={() => setHint(false)}
      >
        {form.hint}
      </Notification>

        <Button
          suffix={
            <Icon
              name={answerExpanded ? "DownArrow" : "RightArrow"}
              size="16px"
              color="white"
              m={{ l: "1rem" }}
            />
          }
          bg="success700"
          shadow="1"
          hoverShadow="3"
          m={{ r: "1rem" }}
          onClick={() => { setAnswerExpanded(!answerExpanded); }}
        >
          Show Answer
        </Button>

        <Button
          suffix={
            <Icon
              name="RightArrow"
              size="16px"
              color="white"
              m={{ l: "1rem" }}
            />
          }
          bg="info600"
          shadow="1"
          hoverShadow="3"
          m={{ r: "1rem" }}
          onClick={() => {
            getQuestion();
          }}
        >
          Next Question
        </Button>
      </Div>

      <Div
        justify="center"
        m={{ y: "1rem"}}
      >
        {answerExpanded ? ShowAnswer : null}
      </Div>
    </Div>
  )
}