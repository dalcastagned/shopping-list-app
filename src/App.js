import Card from "./components/Card";
import GlobalStyle, { Container } from "./styles/globalStyles";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Card inCart={false} data={{ amount: 1, item: 'Item de Teste', value: 25.99 }} />
    </Container>
  );
}

export default App;
