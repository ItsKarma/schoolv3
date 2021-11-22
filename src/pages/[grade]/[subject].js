import { useRouter } from 'next/router';
import getConfig from 'next/config'
import Link from 'next/link';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from '../../styles/Home.module.css';

export default function SubjectPage () {
  const router = useRouter();
  const { grade, subject } = router.query;

  let sections = [];
  const { publicRuntimeConfig } = getConfig();
  if (router.isReady) sections = publicRuntimeConfig.fileTree[grade][subject];

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
          {sections && sections.map((section) => (
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

// We need getInitialProps for next export to work, but it breaks dev.
if (process.env.NODE_ENV != 'development') {
  SubjectPage.getInitialProps = async () => {
    return {};
  };
}