import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import './styles.css'
import {useDispatch} from 'react-redux'
import { cartActions } from '../Redux/cart-slice';
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai';


function Cart() {

  
  let totalamount = 0;
  const dispatch = useDispatch();
  const cartitemlist = useSelector((state)=>state.cart.itemsList)
    cartitemlist.forEach((item)=>{
      totalamount+= item.totalprice
    })
  
  const totalquantity = useSelector((state)=>state.cart.totalQuantity)

  if(totalquantity > 0){
    return (
      (<div className="cartitems">
      {cartitemlist.map((item,index)=>{
        return <div key={index} className='cartitem'>
          <div><img src={item.img}/></div>
              <div>
               
                <p>Total Price : {item.totalprice}</p></div>
              <div><p> Total quantity: {item.quantity}</p></div>
              <div ><button onClick={()=>dispatch(cartActions.increasefromcart(item.id))}><AiOutlineArrowUp/></button>
              <button  onClick={()=>dispatch(cartActions.removefromcart(item.id))}><AiOutlineArrowDown/></button></div>
        </div>
      })}
      <hr/>
      <div className='totalprice'>
        <div>Total</div>
        <div>${totalamount}</div>
      </div>
      <div className='emptycart'>
        <button onClick={()=>dispatch(cartActions.emptycart())}>Clear Cart</button>
      </div>
    </div>)
      
    )
  }
  else{
    return <div className='empty'>Cart is empty</div>
  }
 
}

export default Cart