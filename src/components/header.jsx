import { Div, Button } from 'atomize';

export default function Header() {

  const btn = (path, text) => {
    return (
      <a href={path}>
        <Button
          h="2.5rem"
          p={{ x: ".5rem" }}
          m={{ x: "1rem" }}
          bg="white"
          textSize="subheader"
          textColor="black"
          border={{ b:"2px solid" }}
          borderColor="white"
          hoverBorderColor="black"
          rounded="0"
        >
          {text}
        </Button>
      </a>
    )
  }

  return (
    <header>
      <title>Schoolv3</title>
      <meta name="description" content="School v3" />
      <link rel="icon" href="/favicon.ico" />
      <Div
        d="flex"
        justify="center"
        m={{ t: "1rem" }}
      >
        {btn("/", "Home")}
        {btn("/practice", "Practice")}
        {btn("/curriculum", "Curriculum")}
      </Div>
    </header>
  )
}