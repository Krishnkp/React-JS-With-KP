import React, { useState } from 'react';
import copy from 'copy-to-clipboard';

export default function TextFrom(props) {
  const [text, setText] = useState('');

  const copyText = () => {
    if (text) {
      copy(text);
      alert(`You have copied "${text}"`);
    } else {
      alert("There's nothing to copy. Enter some text first.");
    }
  }

  const convertIntoClear = () => {
    const convertIntoClear = '';
    setText(convertIntoClear);
  }

  const convertIntoLowercase = () => {
    const convertIntoLowercase = text.toLowerCase();
    setText(convertIntoLowercase);
  }

  const convertIntoUppercase = () => {
    const convertIntoUppercase = text.toUpperCase();
    setText(convertIntoUppercase);
  }

  const onChange = (event) => {
    setText(event.target.value);
  }

  const downloadText = () => {
    if (text) {
      const element = document.createElement('a');
      const file = new Blob([text], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'myTextFile.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } else {
      alert("There's nothing to download. Enter some text first.");
    }
  }

  return (
    <>
      <div className='container'>
        <div className="mb-3">
          <h3><b><label htmlFor="myBox" className="form-label">{props.textarea}</label></b></h3>
          <textarea className="form-control" value={text} onChange={onChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-outline-success mx-2" onClick={convertIntoUppercase}>Convert to Uppercase</button>
        <button className="btn btn-outline-success mx-2" onClick={convertIntoLowercase}>Convert to Lowercase</button>
        <button className="btn btn-outline-success mx-2" onClick={copyText}>Copy Text</button>
        <button className="btn btn-outline-success mx-2" onClick={downloadText}>Download Text</button>
        <button className="btn btn-outline-success mx-2" onClick={convertIntoClear}>Clear</button>
      </div>

      <div className='container my-3'>
        <h1>Your Text summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} Minutes read</p>
        <h3><b>Preview</b></h3>
        <p>{text}</p>
      </div>
    </>
  )
}
