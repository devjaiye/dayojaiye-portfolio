import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
            <img src={Wave} alt="" style={{ width: "100%" }} />
            <div className="f-content">
            <span>Temidayo Jaiyeoba | dayojaiye74@gmail.com</span>
            <div className="f-icons">
                <a href="https://www.instagram.com/devjaiye" target="_blank">
                  <Insta color="white" size={'3rem'}/>
                  </a>
                <a href="https://www.twitter.com/devjaiye" target="_blank">
                  <Twitter color="white" size={'3rem'}/>
                  </a>
                <a href="https://www.github.com/devjaiye" target="_blank">
                  <Gitub color="white" size={'3rem'}/>
                  </a>
            </div>
            </div>
    </div>

  )
}

export default Footer   