import { Div } from 'atomize';

export default function Footer() {
  return (
    <footer>
      <Div
        m={{ t:"7rem", b:"2rem" }}
        p={{ t:"2rem" }}
        border={{ t:"1px solid" }}
        borderColor="gray500"
        justify="center"
      >
        <a href="https://github.com/ItsKarma/schoolv3">
            View Source on GitHub
        </a>
      </Div>
    </footer>
  )
}