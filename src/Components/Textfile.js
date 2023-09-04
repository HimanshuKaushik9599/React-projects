import React,{useState} from 'react'
 function Textfile(props)
{
    const onClickUpButton=()=>{
        console.log("on click up ")
        
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
        console.log("on change ")
    }
    const[text,setText]=useState('Enter the text here');
    return(
        <>
      <div className="containermy-3">
        <div className="container my-3">
        <h1>{props.heading}</h1>
            <textarea id="mybox" className="form-control" value={text} onChange={handleOnChange} rows={8}></textarea>
        <div/><div/>
        <button className="btn btn-primary" id="btn" onClick={onClickUpButton}>"Change in UpperCase"</button>
        </div>
        </div>
        <div className="container my-3">
            <h3>Text Summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p></p>
        </div>
        </>
    )
}
export {Textfile};
