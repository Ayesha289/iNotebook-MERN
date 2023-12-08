import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NoteState from "./context/notes/NoteState";
import Header from "./components/Header";
import AuthState from "./context/auth/AuthState";

function App() {
  return (
    <>
      <AuthState>
        <NoteState>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={[<Header />, <Home />]}></Route>
              <Route
                exact
                path="/login"
                element={[<Header />, <Login />]}
              ></Route>
              <Route
                exact
                path="/signup"
                element={[<Header />, <Signup />]}
              ></Route>
            </Routes>
          </BrowserRouter>
        </NoteState>
      </AuthState>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
