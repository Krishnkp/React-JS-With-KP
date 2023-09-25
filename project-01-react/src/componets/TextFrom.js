import React, {useState} from 'react'

export default function TextFrom(props) {   
    const [text, setText] = useState("Enter the text here");

    const convertIntoUppercase = ()=>{
      const convertIntoUppercase = text.toUpperCase();
      setText(convertIntoUppercase);
    }

    const onChange = (event)=>{
      setText(event.target.value);
    }

  return ( 
    <div >
        <div className="mb-3">
            <h3><b><label htmlFor="myBox" className="form-label">{props.textarea}</label></b></h3>
            <textarea className="form-control" value={text} onChange={onChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary"onClick={convertIntoUppercase}>Convert to Uppercase</button>
    </div>
  )
}
