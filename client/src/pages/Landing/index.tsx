import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/dashboard');
  };
  return (
    <>
      <Container>
        <LeftSection>
          <Title>Encuentra tu profesor ideal para clases particulares</Title>
          <Description>
            Conecta con expertos para aprender lo que necesitas, desde cualquier
            lugar y en cualquier momento.
          </Description>
          <Button onClick={handleNavigate}>Empezar ahora</Button>
        </LeftSection>
        <RightSection>
          <Image
            src="https://via.placeholder.com/600x400.webP"
            alt="Representación de clases particulares"
            width="600"
            height="400"
            loading="lazy"
          />
        </RightSection>
      </Container>
    </>
  );
};

export default Landing;
