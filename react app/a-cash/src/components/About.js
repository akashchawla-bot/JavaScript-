// import React, { useState } from "react";

export default function About(props) {

  return (
    <div id={props.about} className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1 className="my-4">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
                color: props.mode === 'dark' ? 'white' : 'black',
                // Make arrow always visible
                WebkitTextFillColor: props.mode === 'dark' ? 'white' : 'black'
              }}
            >
              Button Functionality
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Text Manipulation Tools:</strong> Our textify-tools application provides powerful text processing capabilities through intuitive buttons:
              <ul className="mt-3">
                <li><strong>Convert to Uppercase:</strong> Instantly transform all text to capital letters for emphasis or formatting needs</li>
                <li><strong>Convert to Lowercase:</strong> Change text to small letters for consistent formatting</li>
                <li><strong>Clear Text:</strong> Remove all content with one click for a fresh start</li>
                <li><strong>Copy Text:</strong> Easily copy processed text to your clipboard</li>
                <li><strong>Remove Extra Spaces:</strong> Clean up text by eliminating unnecessary spacing</li>
              </ul>
              Each button is designed to be responsive and provides immediate feedback for a smooth user experience.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
                color: props.mode === 'dark' ? 'white' : 'black',
                WebkitTextFillColor: props.mode === 'dark' ? 'white' : 'black'
              }}
            >
              Dark Mode Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Enhanced User Experience:</strong> Our dark mode feature provides a comfortable viewing experience in low-light conditions:
              <ul className="mt-3">
                <li><strong>Eye-Friendly:</strong> Reduces eye strain during extended use, especially in dimly lit environments</li>
                <li><strong>Battery Efficient:</strong> On OLED displays, dark mode can help conserve battery life</li>
                <li><strong>Modern Aesthetics:</strong> Sleek, contemporary design that's easy on the eyes</li>
                <li><strong>Consistent Theming:</strong> All components automatically adapt to maintain visual harmony</li>
                <li><strong>Accessibility:</strong> Better contrast ratios for users with visual sensitivities</li>
              </ul>
                Toggle between light and dark themes using the theme switcher in the navigation bar of textify-tools.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
                color: props.mode === 'dark' ? 'white' : 'black',
                WebkitTextFillColor: props.mode === 'dark' ? 'white' : 'black'
              }}
            >
              Text Summary & Analytics
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
                <strong>Comprehensive Text Analysis:</strong> Get instant insights about your text content with textify-tools:
              <ul className="mt-3">
                <li><strong>Word Count:</strong> Real-time counting of words as you type or paste text</li>
                <li><strong>Character Count:</strong> Track total characters including spaces and punctuation</li>
                <li><strong>Reading Time:</strong> Estimate how long it takes to read your content</li>
                <li><strong>Paragraph Count:</strong> Identify the number of paragraphs for better structure</li>
                <li><strong>Text Statistics:</strong> Comprehensive overview of your document's composition</li>
              </ul>
                These analytics help you optimize your content length and structure for better readability and engagement using textify-tools.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
