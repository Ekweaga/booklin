import React from 'react'
import './styles.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {FaPinterestP} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
        <div className='footercontent'>
          <div className='footericons'>
            <div><FaFacebookF style={{width:'40px'}}/></div>
            <div><AiOutlineTwitter style={{width:'40px'}}/></div>
            <div><FiInstagram style={{width:'40px'}}/></div>
            <div><FaPinterestP style={{width:'40px'}}/></div>
          </div>
          <div className='divider'></div>
            <p>Created By <span style={{color:'green'}}>Mr.Web Designer</span> | All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer