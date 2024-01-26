import React from 'react'

function Button(props) {
  return (
<button className={props.buttonClass} style={{"width":"90px","height":"35px","backgroundColor":"rgb(100,100,300)","color":"white","fontSize":"20px","cursor":"pointer","borderRadius":"3px"}}>
{props.buttoncontent}
</button>
    )
}

export default Button
