import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import Button from "react-bootstrap/Button";
import { Stack } from "react-bootstrap";
export const Header = () => {
  return (
    <>
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
    </>
  );
};

export default Header;
