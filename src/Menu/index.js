import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {GiEternalLove} from 'react-icons/gi'
import {BsCartFill} from 'react-icons/bs'
import './styles.css'

function Menu() {
  return (
    <header className="header">
        <div className='header-1'>
            <h1 style={{color:'#219150'}}>BOOKLIN</h1>
            <form>
                <input type="text" placeholder="search"/>
               
            </form>

            <div className='icons'>
            <GiEternalLove className='icon'/> &nbsp;
            <BsCartFill className='icon'/>
        </div>
        </div>
        
    </header>
       
  )
}

export default Menu