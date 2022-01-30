import GlobalStyle, { Container } from "./styles/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import AllItems from "./pages/AllItems";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/all" element={<AllItems/>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
