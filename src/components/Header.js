import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import Button from "react-bootstrap/Button";
import { Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      {!localStorage.getItem("token") ? (
        <header href="/">
          <Stack direction="horizontal" gap={3}>
            <div className="p-2">
              <h1>
                <HighlightIcon />
                iNotebook
              </h1>
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
        <header href="/">
          <Stack direction="horizontal" gap={3}>
            <div className="p-2">
              <h1>
                <HighlightIcon />
                iNotebook
              </h1>
            </div>
            <div className="p-2 ms-auto">
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
