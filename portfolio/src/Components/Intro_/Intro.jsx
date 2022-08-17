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
import FloatingDiv from '../FloatingDiv/FloatingDiv'

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
            <img src={boy} alt=""/>
            <img src={glassesImoji} alt="" />
            <div style={{top: '-4%', left: '68%'}}>
                <FloatingDiv image={crown} txt1="Web" txt2="Developer"/>
            </div>
            <div style={{top: '12rem', left: '0rem'}}>
                <FloatingDiv image={thumbup} txt1 = 'Technical' txt2='Writer'/>
            </div>
            {/* blur divs */}
            <div className="blur" 
            style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" 
                  style={{
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',  
                    height: '11rem',
                    left: '-9rem'
                    }}>
               
            </div>
        </div>
    </div>
  )
}

export default Intro