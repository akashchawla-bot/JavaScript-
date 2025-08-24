import React, {useState} from "react";

export default function Textform(props) {

const handleUpClick = () =>{
// console.log("UpperCase was clicked");
let newText = text.toUpperCase();
setText(newText);  
props.showAlert("Converted to Uppercase", "success");
}
const handleLoClick = () =>{
// console.log("Lowercase was clicked");
let newText = text.toLowerCase();
setText(newText);  
props.showAlert("Converted to Lowercase", "success");
}
const handleClearClick = () =>{
// console.log("Clear was clicked");
let newText = "";
setText(newText);  
props.showAlert("Text Cleared", "success");
}
const handleTrimClick = () => {
  // Remove extra spaces between words and trim leading/trailing spaces
  let newText = text.split(/\s+/).join(" ").trim();
  setText(newText);
  props.showAlert("Spaces Removed", "success");
};
// const handleCopyClick = () => {
//   // Copy the text to the clipboard
//   navigator.clipboard.writeText(text);
//   props.showAlert("Text Copied to Clipboard", "success");
// };

const handleCopyClick = () => {
  // Simple fallback that works everywhere
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  props.showAlert("Text Copied to Clipboard", "success");
};

const handleOnChange = (event) => {
// console.log("On Change");
setText(event.target.value);
}

const [text, setText] = useState("");
// text ="new text"; // wrong way to change the state
// setText("new text"); // correct way to change the state  
return (
  <div id={props.id}>
    <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
    <div className="mb-3">
      <textarea
        className="form-control"
        id="myBox"
        rows="8"
        value={text}
        onChange={handleOnChange}
        style={{
          backgroundColor: props.mode === 'dark' ? 'gray' : 'white',
          color: 'black'
      }}></textarea>
      <br />
      <button className="btn btn-primary my-2 mx-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}} onClick={handleUpClick}>Convert to UPPERCASE</button>
      <button className="btn btn-primary my-2 mx-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}} onClick={handleLoClick}>Convert to LOWERCASE</button>
      <button className="btn btn-primary my-2 mx-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}} onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary my-2 mx-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}} onClick={handleTrimClick}>Remove Spaces</button>
      <button className="btn btn-primary my-2 mx-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}} onClick={handleCopyClick}>Copy Text</button>
    </div>
    <div className="container my-3">
      <h2 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Your Text Summary</h2>
      <p style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        {
          text.trim().length === 0
            ? "0 words and 0 characters"
            : `${text.trim().split(/\s+/).length} words and ${text.length} characters`
        }
      </p>
      <p style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        {
          0.008 * text.trim().split(/\s+/).filter(word => word.length !== 0).length
        } Minutes read
      </p>
      <h2 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Preview</h2>
      <p style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        {text.length > 0 ? text : "Nothing to preview!"}
      </p>
    </div>
  </div>
);
}
