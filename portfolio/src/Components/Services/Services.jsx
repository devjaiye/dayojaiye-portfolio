import React, { useContext }  from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from './resume.pdf'
import { themeContext } from '../../Context'
import {motion} from 'framer-motion'

const Services = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const transition = {duration: 1, type: 'string'}

  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span 
            style={{color: darkMode?'white':''}}>My Awesome</span>
            <span>services</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 <br /> 
                 ut labore et dolore magna aliqua
                 </span>
                 
                  <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                 </a>

                 <div className="blur s-blurl" 
                    style={{
                        background: "#ABF1FF94"
                    }}>
            </div>       
        </div>
        {/* right side */}
        <div className="cards">
          {/* first card */}
            {/* <div style={{left: '14rem'}}> */}
            <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}>
              <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Figma, Adobe, Lorem, Sketch"}
              />
            </motion.div>

            {/* second card */}
            <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}>
              <Card
                emoji = {Glasses}
                 heading = {"Developer"}
                 detail = {"HTML, CSS, JavaScript, React"}
              />
            </motion.div>

            {/* third card */}
            <motion.div
              initial={{ top: "19rem", left: "25rem" }}
              whileInView={{ left: "12rem" }}
              transition={transition}
            >
              <Card
                emoji = {Humble}
                heading = {"UI/UX"}
                detail = {"Lorem ipsum dolor sit amet, consectetured do eiusmod tempor incididunt ut labore"}
               />
            </motion.div>
            <div className="blur s-blur2" style={{
              background: "var(--purple)"
            }}></div>
        </div>
    </div>
  )
}

export default Services