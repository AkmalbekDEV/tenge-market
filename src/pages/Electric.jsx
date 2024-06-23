import React, { useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { BiCart } from 'react-icons/bi';
import { BasketContext } from '../context/BasketContext';

const Electric = () => {
  const {getBasketData} = useContext(BasketContext)
  const state = useContext(ProductContext)

  return (
    <div className='bg-white p-7 rounded-xl shadow-md grid grid-cols-5 gap-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
      {state.map((product) => {
        if (product.allCategory == "electronics") {
          return (
            <div key={product.id} className='h-[380px] border p-5 rounded-lg content-between border-gray-300 transition-all hover:shadow-xl cursor-pointer'>
              <Link to={`/product/${product.id}`}>
                <img src={product.img} alt="" className='w-[200px] h-[200px] flex justify-center' />
                <h1 className='mt-8'>{product.title}</h1>
                <h3 className='inline-block mt-8'>{product.price}</h3>
              </Link>
              <BiCart onClick={() => getBasketData(product)} size={30} className='ml-7 z-0 inline-block' />
            </div>
          )
        }
      })}
    </div>
  )
}

export default Electric