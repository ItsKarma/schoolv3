import GetQuestion from '../../../../components/getQuestion';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import styles from '../../../../styles/Home.module.css';
import { useRouter } from 'next/router'

export default function Grade4MathS1() {
  const { asPath } = useRouter()
  const getFormula = () => {
    // get url
    // const url = window.location.href
    const grade = asPath.split('/')[1]
    const subject = asPath.split('/')[2]
    const section = asPath.split('/')[3]
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
