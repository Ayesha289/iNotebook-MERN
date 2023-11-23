import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
      <Navigation/>
      <div className="container">
        <NoteState>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
            </Routes>
          </BrowserRouter>
        </NoteState>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;