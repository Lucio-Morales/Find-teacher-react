import {
  Button,
  Container,
  Description,
  Image,
  LeftSection,
  RightSection,
  Title,
} from './styles';

const Landing = () => {
  return (
    <>
      <Container>
        <LeftSection>
          <Title>Encuentra tu profesor ideal para clases particulares</Title>
          <Description>
            Conecta con expertos para aprender lo que necesitas, desde cualquier
            lugar y en cualquier momento.
          </Description>
          <Button>Empezar ahora</Button>
        </LeftSection>
        <RightSection>
          <Image
            src="https://via.placeholder.com/600x400"
            alt="Representación de clases particulares"
          />
        </RightSection>
      </Container>
    </>
  );
};

export default Landing;
