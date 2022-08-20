import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'

const Services = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>services</span>
            <spane>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 <br /> 
                 ut labore et dolore magna aliqua
                 </spane>
                 <button className="button s-button">Download CV</button>
                 <div className="blur s-blurl" 
                    style={{
                        background: "#ABF1FF94"
                    }}>
            </div>       
        </div>
        {/* right side */}
        <div className="cards">
            <div style={{left: '14rem'}}>
              <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Figma, Adobe, Lorem, Sketch"}
              />
            </div>
        </div>
    </div>
  )
}

export default Services