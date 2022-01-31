import GlobalStyle, { Container } from "./styles/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Copyright from "./components/Copyright";
import { ItemProvider } from "./context";
import { Toaster } from "react-hot-toast";
import AllItems from "./pages/AllItems";

function App() {
  return (
    <Container>
      <ItemProvider>
        <Router>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/all" element={<AllItems />} />
          </Routes>
          <Copyright />
        </Router>
      </ItemProvider>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </Container>
  );
}

export default App;
