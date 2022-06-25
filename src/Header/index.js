import React from 'react'
import './styles.css'
import fi from './if.jpeg'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
      
      <section class="home">
<div className='row'>
    <div class="content" data-aos="slide-left">
        <h2>Upto 75% off</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            
        </p>
        <div><button>Shop Now</button></div>
    </div>
    <div className='homeimg' data-aos="zoom-in">
        <img src={fi} alt="image"/>
    </div>
</div>
          </section>
          
          
          </>
  )
}

export default Header