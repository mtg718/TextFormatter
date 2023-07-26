import React, {useState} from "react";




export default function TextForm(props) {



const handleUpClick=()=>{

  let newText= text.toUpperCase();
setText(newText)
props.showAlert("Converted to UpperCase!", "success")

}


const handleLowClick=()=>{

  let newText= text.toLowerCase();
setText(newText)
props.showAlert("Converted to LowerCase!", "success")

}



const handleClearClick=()=>{

  let newText="";
setText(newText)
props.showAlert("This is cleared!", "success")
}


const handleCopy=()=>{

  var text= document.getElementById("myBox");
navigator.clipboard.writeText(text.value);
props.showAlert("The text is copied!", "success")
}

const handleExtraSpaces=()=>{

  let newText=text.split(/[ ]+/);
setText(newText.join(" "))
props.showAlert("The extra space is removed!", "success")

}
const hadleOnChange=(event)=>{

  setText(event.target.value)
}




const[text, setText]=useState('');


  return (

    <>
<div className="container" style={{color : props.mode === 'dark'? 'white':'black'}}>
<h1>{props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control" id="myBox"  rows="8" value={text} onChange={hadleOnChange} style={{backgroundColor:props.mode==='dark'? 'black':'white', color:props.mode==='dark'? 'white':'black'}}></textarea>
</div>
<button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear all text</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy all text</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces </button>

  </div>
<div className="container my-3" style={{color : props.mode === 'dark'? 'white':'black'}}>
  <h2>Your text summary</h2>
  <p>{text.split(" ").filter((element)=>{
    return element.length!==0
  }).length} words and {text.length} characters</p>


  <p>{0.008*text.split(" ").length} minutes to read the text </p>

  <h2>Preview</h2>

  <p>{text}</p>
</div>


  </>
  )
}

