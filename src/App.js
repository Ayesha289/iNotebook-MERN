import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <NoteState>
        <Header />
        <Container>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
            </Routes>
          </BrowserRouter>
        </Container>
      </NoteState>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
