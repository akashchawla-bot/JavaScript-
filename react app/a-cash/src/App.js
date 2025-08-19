// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";

function App() {
const [mode, setMode] = useState('light'); // 'light' or 'dark'

const toggleMode = () => {
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
  }else if(mode === 'dark'){
    setMode('light');
    document.body.style.backgroundColor =  'white';
  }
  // setMode(mode === 'light' ? 'dark' : 'light');// Toggle between light and dark mode
};

return (
  <>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
      <Textform heading="Enter the Text to Analyse" mode={mode} toggleMode={toggleMode}/>
      <About mode={mode} toggleMode={toggleMode}/>
    </div>
  </>
);
}

export default App;
