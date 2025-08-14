import React, {useState} from "react";

export default function Textform(props) {

const handleUpClick = () =>{
// console.log("UpperCase was clicked");
let newText = text.toUpperCase();
setText(newText);  
}
const handleLoClick = () =>{
// console.log("Lowercase was clicked");
let newText = text.toLowerCase();
setText(newText);  
}
const handleClearClick = () =>{
// console.log("Clear was clicked");
let newText = "";
setText(newText);  
}
const handleTrimClick = () => {
  // Remove extra spaces between words and trim leading/trailing spaces
  let newText = text.split(/\s+/).join(" ").trim();
  setText(newText);
};

const handleOnChange = (event) => {
// console.log("On Change");
setText(event.target.value);
}

const [text, setText] = useState("Enter Text Here");
// text ="new text"; // wrong way to change the state
// setText("new text"); // correct way to change the state  
return (
<>
<h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea
      className="form-control"
      id="myBox"
      rows="8"
      value ={text}
      onChange={handleOnChange}
    ></textarea>
    <br/>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LOWERCASE</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleTrimClick}>Remove Spaces</button>
  </div>
  <div className="container my-3">
    <h2> Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
  </div>
</>
);
}
