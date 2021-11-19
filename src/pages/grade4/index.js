import Link from 'next/link'
import Header from '../../components/header'
import Footer from '../../components/footer'
import styles from '../../styles/Home.module.css'

export default function Grade4() {
  const subjects = [
    {id: "math", name: "Math"},
    {id: "science", name: "Science"},
    {id: "english", name: "English"},
    {id: "socialstudies", name: "Social Studies"}
  ]
  const grade = 4
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
            <Link href={"/grade" + grade + "/" + subj.id} key={subj.id}>
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
