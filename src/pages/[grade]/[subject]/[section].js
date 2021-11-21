// import { useEffect } from 'react';
import { useRouter } from 'next/router';
import GetQuestion from '../../../components/getQuestion';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import styles from '../../../styles/Home.module.css';

export default function SectionPage () {
  const router = useRouter()
  const { subject, grade, section } = router.query

  // This is a test
  // useEffect(()=>{
  //   if(!router.isReady) return;
  //   // console.log(grade)
  // }, [router.isReady]);

  // Uppercase the first character of the subject.
  const niceSubject = `${subject}`.charAt(0).toUpperCase() + `${subject}`.slice(1);

  const getFormula = () => {
    const form = GetQuestion(subject, grade, section);
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
          Grade 4
        </h1>

        <p className={styles.description}>
          Section 1.1
        </p>

        {getFormula()}

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