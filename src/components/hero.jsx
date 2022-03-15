import { Container, Text, Div } from 'atomize';

export default function Hero(props) {
  return (
    <Div tag="section" p={{ t: { xs: "2rem", md: "4rem" } }}>
      <Container d="flex" flexDir="column" align="center">
        <Text
          tag="h1"
          textWeight="500"
          textAlign="center"
          textSize="display3"
          fontFamily="primary"
          m={{ b: "1rem" }}
        >
          {props.title}
        </Text>
        <Text
          tag="h2"
          textWeight="400"
          maxW="36rem"
          textSize="subheader"
          textAlign="center"
          fontFamily="primary"
          textColor="medium"
          m={{ b: "2.5rem" }}
        >
          {props.sub}
        </Text>
      </Container>
    </Div>
  )
}