import React from 'react'
import './styles.css'
import fi from './if.jpeg'

function Header() {
  return (
    <><div className='top'>
          <ul>
              <li>
                  Home
              </li>
              <li>
                  Cart
              </li>
              <li>
                  Features
              </li>
              <li>
                  Blog
              </li>
          </ul>

      </div>
      
      <section class="home">
<div className='row'>
    <div class="content">
        <h2>Upto 75% off</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            
        </p>
        <div><button>Shop Now</button></div>
    </div>
    <div className='homeimg'>
        <img src={fi} alt="image"/>
    </div>
</div>
          </section>
          
          
          </>
  )
}

export default Header