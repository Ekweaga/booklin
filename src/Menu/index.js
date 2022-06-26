import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {GiEternalLove} from 'react-icons/gi'
import {BsCartFill} from 'react-icons/bs'
import {FaUserTie} from 'react-icons/fa'
import {useSelector} from 'react-redux'


import './styles.css'

function Menu() {
  const totalquantity = useSelector((state)=>state.cart.totalQuantity)

  return (
    <header className="header">
        <div className='header-1'>
            <h1 style={{color:'#219150'}}>BOOKLIN</h1>
            <form>
                <input type="text" placeholder="search"/>
               
            </form>

            <div className='icones'>
            <GiEternalLove className='icon'/> &nbsp; <FaUserTie className='icon'/>&nbsp;
            <BsCartFill className='icon'/>{totalquantity}
        </div>
        </div>
        
    </header>
       
  )
}

export default Menu