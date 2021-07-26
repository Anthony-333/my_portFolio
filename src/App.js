import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import Main from "./components/Main";

import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";

import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";

function App() {
  return (
    <div className="Div_wrapper">
      <Navbar />

      <LeftSidebar />
      <Main />
    </div>
  );
}

export default App;
