import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"

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
            I am the right side guy 
        </div>
    </div>
  )
}

export default Services