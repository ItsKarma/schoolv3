import Header from '../../../../components/header'
import Footer from '../../../../components/footer'
import styles from '../../../../styles/Home.module.css'

export default function Grade4Math() {
  const formulas = () => {
    const names = ["Kristen", "Matt", "Gracie", "Connor", "Sally", "Max", "Cici"]
  
    const name1 = names[Math.floor(Math.random()*names.length)];
    // get position of name1 and remove it from the list so name2 is different.
    const index = names.indexOf(name1);
    if (index > -1) {
      names.splice(index, 1);
    }

    const name2 = names[Math.floor(Math.random()*names.length)];
  
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = num1 + Math.floor(Math.random() * 10) + 1;
  
    return {
        question: `${name1} ate ${num1} hot dogs. ${name2} ate ${num2} hot dogs. How many more hot dogs did ${name2} eat than ${name1}?`,
        answer: num2 - num1,
        formula: `${num2} - ${num1}`
    }
  }

  const getFormula = () => {
    const form = formulas();
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
