import React, {useState} from 'react'

export default function TextFrom(props) {   
    const [text, setText] = useState("");

    const convertIntoLowercase = ()=>{
      const convertIntoLowercase = text.toLowerCase();
      setText(convertIntoLowercase);
    }

    const convertIntoUppercase = ()=>{
      const convertIntoUppercase = text.toUpperCase();
      setText(convertIntoUppercase);
    }

    const onChange = (event)=>{
      setText(event.target.value);
    }

  return ( 
      <>
        <div className='container'>
          <div className="mb-3">
              <h3><b><label htmlFor="myBox" className="form-label">{props.textarea}</label></b></h3>
              <textarea className="form-control" value={text} onChange={onChange} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-outline-success mx-2"onClick={convertIntoUppercase}>Convert to Uppercase</button>
          <button className="btn btn-outline-success"onClick={convertIntoLowercase}>Convert to Lowercase</button>
        </div>

        <div className='container my-3'>
          <h1>Your Text summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h3><b>Preview</b></h3>
          <p>{text}</p>
        </div>
      </>
  )
}
