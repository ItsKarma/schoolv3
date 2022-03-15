import { useState, useEffect } from 'react';
import { Div, Button, Icon } from 'atomize';
import GetQuestion from '../components/getQuestion';

export default function QuestionBox(props) {

  const [answerExpanded, setAnswerExpanded] = useState(false);
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
  }, []);

  return (
    <Div
      m={{ y:"1rem" }}
      p={{ y:"1rem", x:"2rem" }}
      rounded="md"
      bg="gray100"
      shadow="3"
    >
      <Div
        align="center"
        p={{ y:"1rem", x:"2rem" }}
      >
        <p id='question'>{form.question}</p>
      </Div>

      <Div d="flex" justify="right">
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
          shadow="2"
          hoverShadow="4"
          m={{ r: "1rem" }}
          onClick={() => { setAnswerExpanded(!answerExpanded); }}
        >
          Show Answer
        </Button>

        <Button
          suffix={
            <Icon
              name={answerExpanded ? "DownArrow" : "RightArrow"}
              size="16px"
              color="white"
              m={{ l: "1rem" }}
            />
          }
          bg="info600"
          shadow="2"
          hoverShadow="4"
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