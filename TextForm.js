import React ,{ useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleLowClick = ()=>{
    //console.log("Uppercase was clicked");
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = ()=>{
    //console.log("Uppercase was clicked");
    let newText='';
    setText(newText)
  }
  const handleCopy = () =>{
      console.log("Im a copy");
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const handleTcClick = () => {
    let newText = text.split(" ").map((currentValue) => {
        let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
        return newText;
    });
    setText(newText.join(" "));
}
  const handleOnChange = (event)=>{
    //console.log("On Change");
    setText(event.target.value)
  }
  
  const [text,setText] = useState('Enter text here');
    return (
      <>
 <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>      

    <h1>{props.heading}</h1>
    <div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
</div>
<button className="btn btn-secondary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>

 <button className="btn btn-secondary mx-3" onClick={handleLowClick}>Convert to Lowercase</button>

 <button className="btn btn-secondary mx-3" onClick={handleClearClick}>Clear Text</button>

 <button className="btn btn-secondary mx-3" onClick={handleTcClick}>Convert to TitleCase</button>

 <button className="btn btn-secondary mx-3" onClick={handleCopy} id="myBox">Copy text</button>
 <button className="btn btn-secondary mx-3" onClick={handleExtraSpaces} id="myBox">remove space</button>
 </div>
 <br>
 </br>
<div className="container my-2" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").length}Minutes read</p>
  <h3>Preview</h3>
  <p>{text}</p>
</div>
     </> 
    )
}
