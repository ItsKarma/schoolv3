import { useRouter } from 'next/router';
import GetQuestion from '../../../components/getQuestion';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import styles from '../../../styles/Home.module.css';

export default function SectionPage () {
  const router = useRouter();
  const { grade, subject, section } = router.query;

  let form = {question: "Loading Question...", formula: "Loading Formula...", answer: "Loading Answer..."}
  let niceSubject = "";
  if (router.isReady) {
    form = GetQuestion(grade, subject, section);
    niceSubject = `${subject}`.charAt(0).toUpperCase() + `${subject}`.slice(1);
  }

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Grade {grade} - {niceSubject}
        </h1>

        <p className={styles.description}>
          Section {section}
        </p>

        <div>
          <p>Question: {form.question}</p>
          <details>
            <summary>Answer: </summary>
            <p>{form.formula} = {form.answer}</p>
          </details>
        </div>

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