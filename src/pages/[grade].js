import { useRouter } from 'next/router';
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function GradePage () {
  const router = useRouter()
  const { grade } = router.query

  const subjects = [
    {id: "math", name: "Math"},
    {id: "science", name: "Science"},
    {id: "english", name: "English"},
    {id: "socialstudies", name: "Social Studies"}
  ]

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Grade {grade}
        </h1>

        <p className={styles.description}>
          Choose a subject
        </p>

        <div className={styles.grid}>
          {subjects.map((subj) => (
            <Link href={"/" + grade + "/" + subj.id} key={subj.id}>
              <a className={styles.card}>
                <h2>{subj.name} &rarr;</h2>
              </a>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

GradePage.getInitialProps = async () => {
  return {};
};