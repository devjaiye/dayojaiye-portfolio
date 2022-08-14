import React from 'react'

function FloatingDiv({image, txt1, txt2}) {
  return (
    <div className="floatingdiv">
        <img src={image} alt="" />
        {/* using props */}
        <span>{txt1} 
            <br/>
            {txt2}
        </span>
    </div>
  )
}

export default FloatingDiv