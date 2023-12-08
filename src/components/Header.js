import React, { useContext } from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import Button from "react-bootstrap/Button";
import { Stack } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import authContext from "./../context/auth/AuthContext";

export const Header = () => {
  const context = useContext(authContext);
  const { getUsers } = context;

  if (localStorage.getItem("token")) {
    getUsers().then((result) => {
      return (document.getElementById("user").innerHTML =
        "<h3>Hello, " + result + "  </h3>");
    });
  }

  const logOut = () => {
    window.location.reload();
    localStorage.removeItem("token");
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
            <div className="d-none" id="user"></div>
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
            <div className="p-2 ms-auto" id="user"></div>
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
