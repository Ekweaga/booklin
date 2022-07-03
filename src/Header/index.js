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
        <p>Get a 75% discount for every $15000 book you buy. From applied literature to educational resources, we have a lot of textbooks to 
              offer you. We provide only the new books on rent for a period of 3 days
            
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