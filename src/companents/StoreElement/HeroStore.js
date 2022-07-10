import React from 'react'
import { CgMenu } from 'react-icons/cg';
import { VscChevronDown } from 'react-icons/vsc';
import { MdHeadsetMic } from 'react-icons/md';
import { AiOutlineTablet ,AiOutlineCamera} from 'react-icons/ai';
import { RiComputerLine } from 'react-icons/ri';
import { GiSmartphone } from 'react-icons/gi';
import { GoWatch } from 'react-icons/go';
import { BsLaptop,BsTools,BsKeyboard ,BsCameraVideo} from 'react-icons/bs';
import './StoreElement.css'
function HeroStore() {
  return (
    <div className='hero__info'>
    <div className='container'>
        <div className='df ai between'>
          <div className='hero__categories df ai between'>
            <div className='hero__browse df ai'>
              <CgMenu className='hero__menu-icon' />
              <p className='hero__menubrowse'>browse categories</p>
              <div className='hero__browsemenu'>
                <div className='hero__browse-link df ai'><RiComputerLine className='hero__browse-icon' /><p className='hero__browse-text'>Computers</p></div>
                <div className='hero__browse-link df ai'><BsLaptop className='hero__browse-icon' /><p className='hero__browse-text'>Laptopd</p></div>
                <div className='hero__browse-link df ai'><GiSmartphone className='hero__browse-icon' /><p className='hero__browse-text'>Smartphones</p></div>
                <div className='hero__browse-link df ai'><AiOutlineTablet className='hero__browse-icon' /><p className='hero__browse-text'>Tablets</p></div>
                <div className='hero__browse-link df ai'><i className='bx bx-tv hero__browse-icon'></i><p className='hero__browse-text'>TV, Audio</p></div>
                <div className='hero__browse-link df ai'><RiComputerLine className='hero__browse-icon' /><p className='hero__browse-text'>Hart Drive</p></div>
                <div className='hero__browse-link df ai'><MdHeadsetMic className='hero__browse-icon' /><p className='hero__browse-text'>headphones</p></div>
                <div className='hero__browse-link df ai'><GoWatch className='hero__browse-icon' /><p className='hero__browse-text'>watch</p></div>
                <div className='hero__browse-link df ai'><BsTools className='hero__browse-icon' /><p className='hero__browse-text'>accessories</p></div>
                <div className='hero__browse-link df ai'><BsKeyboard className='hero__browse-icon' /><p className='hero__browse-text'>keyboard</p></div>
                <div className='hero__browse-link df ai'><AiOutlineCamera className='hero__browse-icon' /><p className='hero__browse-text'>cameras</p></div>
                <div className='hero__browse-link df ai'><BsCameraVideo className='hero__browse-icon' /><p className='hero__browse-text'>virtual reality</p></div>
              </div>

            </div>
            <div className='hero__navlinks df ai'>
              <p className='hero-navlink-text'>home</p>
              <VscChevronDown />
            </div>
            <div className='hero__navlinks df ai'>
              <p className='hero-navlink-text'>shop</p>
              <VscChevronDown />
            </div>
            <div className='hero__navlinks df ai'>
              <p className='hero-navlink-text'>elements</p>
              <VscChevronDown />
            </div>
            <div className='hero__navlinks df ai'>
              <p className='hero-navlink-text'>pages</p>
              <VscChevronDown />
            </div>
            <div className='hero__navlinks df ai'>
              <p className='hero-navlink-text'>ventors</p>
              <VscChevronDown />
            </div>
          </div>
          <a href="tel:998902348214" className='hero__call df ai'>
            <MdHeadsetMic className='hero__call-icon' />
            <span>+998902348214</span>
          </a>
        </div>
    </div>
  </div>
  )
}

export default HeroStore