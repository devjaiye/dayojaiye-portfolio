import React from 'react'
import './Works.css'
import upwork from '../../img/Upwork.png'
import fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'

const works = () => {
  return (
    <div className="works">
        <div className="awesome">
            <span>Works for All these</span>
            <span>Brands & Clients</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 <br /> 
                 ut labore et dolore magna aliqua ut labore et 
                 <br />
                 ut labore et dolore magna aliqua ut labore et dolore magna aliqua
                 <br />
                 ut labore et dolore magna aliqua ut labore 
                 </span>
                    <button className="button s-button">Download CV</button>
                 <div className="blur s-blurl" 
                    style={{
                        background: "#ABF1FF94"
                    }}>
            </div>       
        </div>
        {/* right side with circle */}
        <div className="w-right">
          <div className="w-mainCircle">
            <div className="w-secCircle">
              <img src={upwork} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={fiverr} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Facebook} alt="" />
            </div>
          </div>

          {/* background Circles */}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>          
        </div>
    </div>
  )
}

export default works