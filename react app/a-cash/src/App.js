// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";

function App() {
return (
  <>
    <Navbar title="TextUtils" aboutText="About Us" />
    <div className="container my-3">
      <Textform heading="Enter the Text to Analyse" />
      <About />
    </div>
  </>
);
}

export default App;
