import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* heading section */}
      <span>Recent Projects</span>
      <span>Portfolio</span>
      {/* slider */}
      <Swiper>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio