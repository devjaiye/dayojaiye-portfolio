import React,{useContext} from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import etremglobal from "../../img/etrem_global.png"
import movieFinder from "../../img/movie_finder.png"
import devTo from "../../img/devTo.png"
import weatherApp from "../../img/weatherApp_js.png"
import 'swiper/css'
import { themeContext } from "../../Context"

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading section */}
      <span
      style={{color: darkMode? 'white' : ''}}
      >Recent Projects</span>
      <span>Portfolio</span>
      
      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
         <a href='https://etremglobal.com/' target='_blank'><img src={etremglobal} alt="" /></a> 
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://moviefinda.netlify.app/" target="_blank"><img src={movieFinder} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://weathermantic.netlify.app/' target="_blank"><img src={weatherApp} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://dev.to/devjaiye" target="_blank"><img src={devTo} alt="" /></a>
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Portfolio