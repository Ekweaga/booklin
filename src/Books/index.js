import React from 'react'
import { DataItem } from '../Data/data'
import {useDispatch, useSelector} from 'react-redux'
import { cartActions } from '../Redux/cart-slice';

function Books() {
    const dispatch = useDispatch();
    


   
  return (
    <><div className='demanded'>
          <h1>Demanded books</h1>
          <div className='demandedbooks'>
              {DataItem.slice(3,8).map((data,index) => {
                  return <div key={index}>
                      <img src={data.image} />
                      <div>${data.price}</div>
                      <div><button onClick={()=>dispatch(cartActions.addtocart({id:data.id,price:data.price,img:data.image}))}>Add to cart</button></div>
                  </div>

              })}
          </div>

      </div><div className='arrival'>
              <h1>New arrival books</h1>
              <div className="arrivalbooks">
                  {DataItem.slice(5, 10).map((data,index) => {
                      return <div key={index}>
                          <img src={data.image} />
                          <div>${data.price}</div>
                          <div><button  onClick={()=>dispatch(cartActions.addtocart({id:data.id,price:data.price,img:data.image}))}>Add to cart</button></div>
                      </div>

                  })}
              </div>

          </div></>
  )
}

export default Books