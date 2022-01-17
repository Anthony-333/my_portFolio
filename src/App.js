import React, { useRef, Suspense } from "react";
import "./App.css";

import Navbar from "./components/navBar/Navbar";
import LeftSidebar from "./components/leftSidebar/LeftSidebar";
import Rightsidebar from "./components/rightSidebar/Rightsidebar";
import Main from "./components/Main/Main";

import Particles from "./components/particles/Particles";

function App() {
  return (
    <div className="Main_wrapping">
      <div className="html_wrap">
        <Navbar />
        <LeftSidebar />
        <Main />
        <Rightsidebar />
      </div>

      <div className="canvas_wrap">
        <Particles />
      </div>
    </div>
  );
}

export default App;
