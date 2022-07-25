import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {GiEternalLove} from 'react-icons/gi'
import {BsCartFill} from 'react-icons/bs'
import {FaUserTie} from 'react-icons/fa'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'


import './styles.css'

function Menu() {
  const totalquantity = useSelector((state)=>state.cart.totalQuantity)

  return (
    <header className="header">
        <div className='header-1'>
            <h1 style={{color:'#219150'}}><Link to='' style={{color:'green',textDecoration:'none'}}>BOOKLIN</Link></h1>
            <form>
                <input type="text" placeholder="search"/>
               
            </form>

            <div className='icones' style={{display:'flex'}}>
            <GiEternalLove className='icon'/> &nbsp; <FaUserTie className='icon'/>&nbsp;
           <Link to='cart' style={{color:'black',textDecoration:'none',display:'flex'}}> <BsCartFill className='icon'/>{totalquantity}</Link>
        </div>
        </div>
        
    </header>
       
  )
}

export default Menu