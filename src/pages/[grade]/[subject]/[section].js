import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import GetQuestion from '../../../components/getQuestion';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import styles from '../../../styles/Home.module.css';

export default function SectionPage () {
  const [_subject, setSubject] = useState("");
  const [_grade, setGrade] = useState("");
  const [_section, setSection] = useState("");
  const [niceSubject, setNiceSubject] = useState("");

  const router = useRouter()
  useEffect(()=>{
    if(!router.isReady) return;
    const { grade, subject, section } = router.query;
    setSubject(subject);
    setGrade(grade);
    setSection(section);
    // Uppercase the first character of the subject.
    setNiceSubject(`${subject}`.charAt(0).toUpperCase() + `${subject}`.slice(1));
  }, [router.isReady]);

  const createQuestion = () => {
    let form = {question: "Loading Question...", formula: "Loading Formula...", answer: "Loading Answer..."}
    try {
      form = GetQuestion(_subject, _grade, _section);
    } catch {
      // Commented out to clean console in prod.
      // console.log("Unable to load question.")
    }
    return (
      <div>
        <p>Question: {form.question}</p>
        <details>
          <summary>Answer: </summary>
          <p>{form.formula} = {form.answer}</p>
        </details>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Grade 4 - {niceSubject}
        </h1>

        <p className={styles.description}>
          Section {_section}
        </p>

        {createQuestion()}

      </main>
      <Footer />
    </div>
  )
}

// We need getInitialProps for next export to work, but it breaks dev.
if (process.env.NODE_ENV != 'development') {
  SectionPage.getInitialProps = async () => {
    return {};
  };
}