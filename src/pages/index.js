import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  const gradeList = [4]
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to School v3
        </h1>

        <p className={styles.description}>
          Select a Grade
        </p>

        <div className={styles.grid}>
          {gradeList.map((grade) => (
            <Link href={"/" + grade} key={grade}>
              <a className={styles.card}>
                <h2>Grade {grade} &rarr;</h2>
              </a>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
