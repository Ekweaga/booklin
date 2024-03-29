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
import { DataItem } from '../Data/data'
import Header from '../Header'
import {Link} from 'react-router-dom'
import {AiOutlineStar} from 'react-icons/ai'
import Menu from '../Menu'

function Home() {
  return (
    <> 
  
    <Header/>
    <div className="icons">
      <div className='icon'data-aos="zoom-in">
        <FaShippingFast style={{ width: '200px', height:'50px' ,color: 'green' }} /> <div>
          <b style={{fontSize:'13px'}}>Free shipping</b><br />
          <span style={{fontSize:'16px'}}>Order over $100</span>
        </div>

      </div>
      <div className='icon' data-aos="zoom-in">
        <AiOutlineReload style={{ width: '200px', height:'50px' , color: 'green' }} /> <div>
          <b style={{fontSize:'13px'}}> Easy Returns</b><br />
          <span style={{fontSize:'16px'}}>10 days return</span>
        </div>

      </div>
      <div className='icon' data-aos="zoom-in">
        <BiSupport style={{ width: '200px', height:'50px' ,color: 'green' }} /> <div>
          <b style={{fontSize:'13px'}}>24/7 support</b><br />
          <span style={{fontSize:'16px'}}>Call us support</span>
        </div>

      </div>

      <div className='icon' data-aos="zoom-in">
        <RiSecurePaymentLine style={{ width: '200px', height:'50px' , color: 'green' }} /> <div>
          <b style={{fontSize:'13px'}}>Secure Payment</b><br />
          <span style={{fontSize:'16px'}}>100% secure payment</span>
        </div>

      </div>


    </div>

    <div className='demanded'>
      <h1>Demanded books</h1>
      <div className='demandedbooks'> 
         {DataItem.slice(0,5).map((data,index)=>{
        return   <div key={index}>
               <img src={data.image}/>
               <div><AiOutlineStar style={{color:'green'}}/><AiOutlineStar style={{color:'green'}}/><AiOutlineStar style={{color:'green'}}/><AiOutlineStar style={{color:'green'}}/><AiOutlineStar style={{color:'green'}}/></div>
               <div>{data.price}</div>

               <div><button><Link to='/books' style={{color:'white',textDecoration:'none'}}>Buy now</Link></button></div>
          </div>
         
        })}
        </div>
      
          </div>
    
    <section class="home">
        <div className='row'>
          <div class="content" data-aos="slide-right">
            <h1 style={{color:'green'}}>Deal Of the Day</h1>
            <h2>Upto 50% off</h2>
            <p>Get a 50% discount of any books you get today. From applied literature to educational resources, we have a lot of textbooks to 
              offer you. We provide only the new books on rent for a period of 3 days

            </p>
            <div><button>Shop Now</button></div>
          </div>
          <div className='homeimgs' data-aos="zoom-in">
           <img src={jj}/>
         
          </div>
        </div>
      </section>
      <div className='blogcontent'>
        <h1>Our Blogs</h1>
        <div className='blogs'>
          <div className='blog' data-aos="zoom-in">
            <img src={img1}/>
            <div style={{padding:'10px'}}>
              <h2>
                Why books are important
              </h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <div style={{float:'right',marginTop:'15px'}}><button>Read more</button></div>
            </div>
          </div>
          <div className='blog' data-aos="fade-in">
          <img src={img2}/>
          <div style={{padding:'10px'}}>
              <h2>
                Why books are Important
              </h2>
              <p>There is a saying that goes thus, readers are leaders. When you read you tend to go farer than your mates </p>
               <div style={{float:'right',marginTop:'15px'}}><button>Read more</button></div>
            </div>
          </div>
          <div className='blog' data-aos="zoom-in">
          <img src={jj}/>
          <div style={{padding:'10px'}}>
              <h2>
              Awesome books for all Moods
              </h2>
              <p>The year looks like an amazing year foor books. Let get best books that fit our moods for a better living </p>
              <div style={{float:'right',marginTop:'15px'}}><button>Read more</button></div>
            </div>
          </div>
          <div className='blog' data-aos="zoom-in">
          <img src={img4}/>
          <div style={{padding:'10px'}}>
              <h2>
                Amazing Middle and frade fantasy
              </h2>
              <p>Nothing lifts me up after a dull day like an excellent middle grade fantasy. </p>
              <div style={{float:'right',marginTop:'15px'}}><button>Read more</button></div>
            </div>
          </div>
        </div>
      </div>
         
      <div className='arrival'>
      <h1>New arrival books</h1>
      <div className="arrivalbooks">
      {DataItem.slice(5,10).map((data,index)=>{
        return   <div key={index}>
               <img src={data.image}/>
               <div><AiOutlineStar style={{color:'green'}}/><AiOutlineStar style={{color:'green'}}/><AiOutlineStar style={{color:'green'}}/><AiOutlineStar style={{color:'green'}}/><AiOutlineStar style={{color:'green'}}/></div>
               <div>{data.price}</div>
               <div><button><Link to='/books' style={{color:'white',textDecoration:'none'}}>Buy now</Link></button></div>
          </div>
         
        })}
      </div>
     
          </div>

      <div className='email'>
          
              <h1>Subscribe For Latest Updates</h1><br/>
              <input type="text" placeholder='enter your email' data-aos="zoom-in"/>
              <button data-aos="zoom-in">Subcribe</button>
           
      </div>
     
      
      </>
  )
}

export default Home