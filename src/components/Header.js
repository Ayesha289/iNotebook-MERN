import React, { useContext } from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import Button from "react-bootstrap/Button";
import { Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import authContext from "./../context/auth/AuthContext";

export const Header = () => {
  const context = useContext(authContext);
  const { getUsers } = context;
  const navigate = useNavigate();

  const user = getUsers().then((result) => {
    return result;
  });

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      {!localStorage.getItem("token") ? (
        <header>
          <Stack direction="horizontal" gap={3}>
            <div className="p-2">
              <Nav.Link href="/">
                <h1>
                  <HighlightIcon />
                  iNotebook
                </h1>
              </Nav.Link>
            </div>
            <div className="p-2 ms-auto">
              <Button href="/login" variant="outline-light" className="link">
                Login
              </Button>
            </div>
            <div className="p-2">
              <Button href="/signup" variant="outline-light" className="link">
                Signup
              </Button>
            </div>
          </Stack>
        </header>
      ) : (
        <header>
          <Stack direction="horizontal" gap={3}>
            <div className="p-2">
              <Nav.Link href="/">
                <h1>
                  <HighlightIcon />
                  iNotebook
                </h1>
              </Nav.Link>
            </div>
            <div className="p-2 ms-auto">
              <h3>{`Hello,`}</h3>
            </div>
            <div className="p-2">
              <Button onClick={logOut} variant="outline-light" className="link">
                Logout
              </Button>
            </div>
          </Stack>
        </header>
      )}
    </>
  );
};

export default Header;
