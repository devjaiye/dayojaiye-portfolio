import React from 'react'
import './Intro.css'
// 

function Intro() {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Howdy! I'm</span>
                <span>Temidayo Jaiyeoba</span>
                <span>Software Enginner from Nigeria with high level 
                    of experience in developing quality
                    websites and mobile apps for business
                </span>
            </div>
            <button className="button i-button">
                Hire me
            </button>
        </div>

        <div className="i-right">
            i am right side 
        </div>
    </div>
  )
}

export default Intro