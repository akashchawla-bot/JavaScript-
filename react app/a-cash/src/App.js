// import logo from './logo.svg';
import React,{ useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
const [mode, setMode] = useState('light'); // 'light' or 'dark'
const [alert, setAlert] = useState(null); // null is for no alert

// Show welcome alert when component mounts
useEffect(() => {
  showAlert("Welcome to textify-tools", "success");
}, []);

// showAlert is a function to show the alert
const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  });
  setTimeout(() => {
    setAlert(null);
  }, 1500);
};

// toggleMode is a function to toggle the mode
const toggleMode = () => {
  if(mode === 'light'){
    setMode('dark');
    showAlert("Dark mode has been enabled", "success");
    document.body.style.backgroundColor = '#042743';
  }else if(mode === 'dark'){
    setMode('light');
    showAlert("Light mode has been enabled", "success");
    document.body.style.backgroundColor =  'white';
  }
  // setMode(mode === 'light' ? 'dark' : 'light');// Toggle between light and dark mode
};

return (
  <>
  {/* <Router> */}
    <Navbar title="textify-tools" homeText="Home" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes>
          <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path="/" element={<Textform heading="Enter the Text to Analyse" mode={mode} showAlert={showAlert} toggleMode={toggleMode}/>} />          
    </Routes> */}
      <Textform heading="Enter the Text to Analyse" mode={mode} showAlert={showAlert} toggleMode={toggleMode} id="home"/>
      <About mode={mode} toggleMode={toggleMode} about="about"/>
    </div>
    <Footer mode={mode} />
    {/* </Router> */}
  </>
);
}

export default App;
