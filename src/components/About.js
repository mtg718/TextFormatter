import React from 'react'

export default function About(props) {


let myStyle={
  color: props.mode ==='dark'? 'white':'#042743',
  backgroundColor: props.mode ==='dark'? 'rgb(36,74,104)':'white'
}


  return (
    <div className="container" >

        <h1 className='my-3' style={{color: props.mode ==='dark'? 'white':'#042743'}}>About Us</h1>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
      Textutils gives you a way to analyze your text quickly.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button style={myStyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to Use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
       
Textutils is a free character counter tool that provides instant character count and word count statistics.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button style={myStyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser  Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
      This word counter software works in any web browser like chrome, firefox,opera.
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3">
<button type="button" class="btn btn-primary">Enable dark mode</button>
    
</div> */}

    </div>
  )
}
