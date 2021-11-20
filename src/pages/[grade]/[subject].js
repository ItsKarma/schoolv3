import { useRouter } from 'next/router';
import Link from 'next/link'
import Header from '../../components/header'
import Footer from '../../components/footer'
import styles from '../../styles/Home.module.css'

export default function SubjectPage () {
  const router = useRouter()
  const { grade, subject } = router.query

  // TODO: Get the section list from what's available in the curriculum/components.
  const sections = [
    "1.1", "1.2", "1.3", "1.4", "1.5",
    "2.1", "2.2", "2.3", "2.4", "2.5",
    "3.1", "3.2", "3.3", "3.4", "3.5",
    "4.1", "4.2", "4.3", "4.4", "4.5",
  ]

  // Uppercase the first character of the subject.
  const niceSubject = `${subject}`.charAt(0).toUpperCase() + `${subject}`.slice(1);

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Grade {grade} - {niceSubject}
        </h1>

        <p className={styles.description}>
          Choose a section
        </p>

        <div className={styles.grid}>
          {sections.map((section) => (
            <Link href={`/${grade}/${subject}/${section}`} key={section}>
              <a className={styles.card}>
                <h2>{section} &rarr;</h2>
              </a>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

SubjectPage.getInitialProps = async () => {
  return {};
};