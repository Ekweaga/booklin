import React from 'react'
import {useSelector} from 'react-redux'
import './styles.css'
import {useDispatch} from 'react-redux'
import { cartActions } from '../Redux/cart-slice';


function Cart() {
  const dispatch = useDispatch();
  const cartitemlist = useSelector((state)=>state.cart.itemsList)
  const totalquantity = useSelector((state)=>state.cart.totalQuantity)

  if(totalquantity > 1){
    return (
      (<div className="cartitems">
      {cartitemlist.map((item,index)=>{
        return <div key={index} className='cartitem'>
          <div><img src={item.img}/></div>
              <div><p>{item.price}</p></div>
              <div><p>{item.quantity}</p></div>
              <div><button>-</button>
              <button>+</button></div>
        </div>
      })}
      <hr/>
      <div className='totalprice'>
        <div>Total</div>
        <div>TotalPrice</div>
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