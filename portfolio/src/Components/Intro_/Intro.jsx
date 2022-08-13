import React from 'react'
import './Intro.css'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import instagram from '../../img/instagram.png'
import boy from '../../img/boy.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesImoji from '../../img/glassesimoji.png'

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
            <div className="i-icons">
                <img src={linkedin} alt="linkedin" />
                <img src={instagram} alt="instagram" />
                <img src={github} alt="github" />
            </div>
        </div>

        <div className="i-right">
            <img src={vector1} alt="blue vector" />
            <img src={vector2} alt="yellow vector" />
            <img src={boy} alt="" />
        </div>
    </div>
  )
}

export default Intro