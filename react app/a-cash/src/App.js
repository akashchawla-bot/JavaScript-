// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";

function App() {
const [mode, setMode] = useState('dark'); // 'light' or 'dark'

const toggleMode = () => {
  setMode(mode === 'light' ? 'dark' : 'light');
};

return (
  <>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
      <Textform heading="Enter the Text to Analyse" mode={mode} />
      <About />
    </div>
  </>
);
}

export default App;
