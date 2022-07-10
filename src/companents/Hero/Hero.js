import React from 'react'
import './Hero.css'
import { CgMenu } from 'react-icons/cg';
import { VscChevronDown } from 'react-icons/vsc';
import { MdHeadsetMic } from 'react-icons/md';
import { AiOutlineLeft,AiOutlineRight,AiOutlineTablet ,AiOutlineCamera} from 'react-icons/ai';
import { RiComputerLine } from 'react-icons/ri';
import { GiSmartphone } from 'react-icons/gi';
import { GoWatch } from 'react-icons/go';
import { BsLaptop,BsTools,BsKeyboard ,BsCameraVideo} from 'react-icons/bs';

import sliderbg from '../../assets/imgs/slider-bg.jpg'
import sliderimg1 from '../../assets/imgs/slider1.png'
import sliderimg2 from '../../assets/imgs/slider2.png'
import HeroCategory from './HeroCategory';
function Hero() {
  return (
    <div className='hero'>
      <HeroCategory />
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button className="slider-f-btn active" type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to={0} aria-current="true" aria-label="Slide 1" />
              <button className='slider-f-btn' type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to={1} aria-label="Slide 2" />
            </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={sliderbg} className="d-block w-100 carusel-img" alt="..." />
              <img className='sliderimg' src={sliderimg1} alt="" />
              <div className='slider-onfo'>
                  <span className='slider-info-n'>Camera Accessories</span>
                  <p className='slider-info-text'>Phontom 4 Pro Flight Series discount up to <span className='slider-procent'>50% Off</span></p>
                  <button className='slider-info-btn'>Shop Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={sliderbg} className="d-block w-100 carusel-img" alt="..." />
              <img className='sliderimg' src={sliderimg2} alt="" />
              <div className='slider-onfo'>
                  <span className='slider-info-n'>Limited Edition</span>
                  <p className='slider-info-text'>High Quality Optics See a Different Word <span className='slider-procent'>$120.00</span></p>
                  <button className='slider-info-btn'>Shop Now</button>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <AiOutlineLeft className='carusel-left'/>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <AiOutlineRight className='carusel-right'/>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


    </div>
  )
}

export default Hero