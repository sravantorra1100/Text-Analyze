import React from 'react'
import { useState } from 'react';
const Textform = (props) => {
    const [text,setText]=useState("enter text here")
    const handleUpClick=()=>{
       let newText=text.toUpperCase();
       setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const handleLoClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
   }
   const handleClearClick=()=>{
    let newText="";
    setText(newText);
 }

 
 return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
    <div className='mb-3'>
    <textarea className='form-control' id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea> 
    </div>
    <div>
    <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
    <button className='btn btn-primary' onClick={handleLoClick}>Convert to LowerCase</button>
    <button className='btn btn-primary' onClick={handleClearClick}>Clear All</button>
   
    </div>
    <div>
      <h2>Text Preview</h2><p>{text}</p>
      <h2>Your text summary</h2><p>Word Count{text.split(' ').length}|Character Count{text.length}|Sentence Count{text.split('.').length-1}</p>
    <h2>Time takes to read text:</h2><p>{0.008*text.split(' ').length} Minutes to read</p>
    </div>
    </div>
    
    </>
  )
}

export default Textform