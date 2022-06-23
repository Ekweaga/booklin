import React from 'react'
import './styles.css'
import { RiSecurePaymentLine} from 'react-icons/ri'
import { BiSupport} from "react-icons/bi"
import { FaShippingFast} from "react-icons/fa"
import {AiOutlineReload} from "react-icons/ai"
import jj from './jj.jpeg'
import img1 from './image-confetti.jpg'
import img2 from './image-currency.jpg'
import img3 from './image-mockups.png'
import img4 from './image-plane.jpg'
import cap from './cap.png'

function Home() {
  return (
    <><div className="icons">
      <div className='icon'>
        <FaShippingFast style={{ width: '200px', height:'50px' ,color: 'green' }} /> <div>
          <b style={{fontSize:'13px'}}>Free shipping</b><br />
          <span style={{fontSize:'16px'}}>Order over $100</span>
        </div>

      </div>
      <div className='icon'>
        <AiOutlineReload style={{ width: '200px', height:'50px' , color: 'green' }} /> <div>
          <b style={{fontSize:'13px'}}> Easy Returns</b><br />
          <span style={{fontSize:'16px'}}>10 days return</span>
        </div>

      </div>
      <div className='icon'>
        <BiSupport style={{ width: '200px', height:'50px' ,color: 'green' }} /> <div>
          <b style={{fontSize:'13px'}}>24/7 support</b><br />
          <span style={{fontSize:'16px'}}>Call us support</span>
        </div>

      </div>

      <div className='icon'>
        <RiSecurePaymentLine style={{ width: '200px', height:'50px' , color: 'green' }} /> <div>
          <b style={{fontSize:'13px'}}>Secure Payment</b><br />
          <span style={{fontSize:'16px'}}>100% secure payment</span>
        </div>

      </div>


    </div><section class="home">
        <div className='row'>
          <div class="content">
            <h1 style={{color:'green'}}>Deal Of the Day</h1>
            <h2>Upto 50% off</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.

            </p>
            <div><button>Shop Now</button></div>
          </div>
          <div className='homeimgs'>
           <img src={jj}/>
         
          </div>
        </div>
      </section>
      <div className='blogcontent'>
        <h1>Our Blogs</h1>
        <div className='blogs'>
          <div className='blog'>
            <img src={img1}/>
            <div style={{padding:'10px'}}>
              <h2>
                Why books are important
              </h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <div style={{float:'right',marginTop:'15px'}}><button>Read more</button></div>
            </div>
          </div>
          <div className='blog'>
          <img src={img2}/>
          <div style={{padding:'10px'}}>
              <h2>
                Why books are important
              </h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
               <div style={{float:'right',marginTop:'15px'}}><button>Read more</button></div>
            </div>
          </div>
          <div className='blog'>
          <img src={jj}/>
          <div style={{padding:'10px'}}>
              <h2>
                Why books are important
              </h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <div style={{float:'right',marginTop:'15px'}}><button>Read more</button></div>
            </div>
          </div>
          <div className='blog'>
          <img src={img4}/>
          <div style={{padding:'10px'}}>
              <h2>
                Why books are important
              </h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <div style={{float:'right',marginTop:'15px'}}><button>Read more</button></div>
            </div>
          </div>
        </div>
      </div>

      <div className='email'>
            <div>
              <h1>Subscribe For Latest Updates</h1>
              <input type="text" placeholder='enter your email'/>
            </div>
      </div>
      
      </>
  )
}

export default Home