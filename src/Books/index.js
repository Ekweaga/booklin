import React from 'react'
import { DataItem } from '../Data/data'

function Books() {
  return (
    <><div className='demanded'>
          <h1>Demanded books</h1>
          <div className='demandedbooks'>
              {DataItem.slice(0, 5).map((data) => {
                  return <div>
                      <img src={data.image} />
                      <div>{data.price}</div>
                      <div><button>Buy now</button></div>
                  </div>

              })}
          </div>

      </div><div className='arrival'>
              <h1>New arrival books</h1>
              <div className="arrivalbooks">
                  {DataItem.slice(5, 10).map((data) => {
                      return <div>
                          <img src={data.image} />
                          <div>{data.price}</div>
                          <div><button>Buy now</button></div>
                      </div>

                  })}
              </div>

          </div></>
  )
}

export default Books