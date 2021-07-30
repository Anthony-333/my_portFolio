import React, { useRef, Suspense } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import Rightsidebar from "./components/Rightsidebar";
import Main from "./components/Main";

import Particles from "./components/Particles";



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
