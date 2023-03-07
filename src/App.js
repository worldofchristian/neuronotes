import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import NavDropdown from "./components/NavDropdown";
import Post from "./components/Post";

function App() {

  const [isOpen, setOpen ] = useState(true)

    const toggle = () => {
        setOpen(!isOpen)
    }

  return (
    <>
    <Navbar toggle={toggle} />
    <NavDropdown isOpen={!isOpen} toggle={toggle} />

    <div
    className="flex items-center justify-center">
      <Post />
    </div>
    </>
  );
}

export default App;
