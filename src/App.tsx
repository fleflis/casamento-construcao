import we from './assets/images/we.jpeg';

import { Container, OurImage, RootContainer, Title, Subtitle, Description } from './styles';

function App() {
  return (
    <RootContainer>
      <Container>
        <Title>Christian & Pamella</Title>
        <Subtitle>Site em construção</Subtitle>
        <OurImage src={we} title="Griss e Pamy" alt="Griss e Pamy <3" />

        <Description>
          Estamos terminando de desenvolver o site e ajeitando os toques finais. <br />
          Retorne em breve!
        </Description>
      </Container>
    </RootContainer>
  );
}

export default App;
