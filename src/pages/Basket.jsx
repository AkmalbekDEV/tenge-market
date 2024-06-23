import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketContext'
import { Link } from 'react-router-dom'
import { BiTrash } from 'react-icons/bi'
import EmptyImg from '../assets/empty.svg'

const Basket = () => {
  const { basket, onDelete } = useContext(BasketContext)

  const onFocus = (text) => {
    text = "Fuck You";
  }

  if (basket.length > 0) {
    return (
      <div className='rounded-xl bg-white p-5'>
        <div className='topbar mb-7'>
          <h1 className='text-4xl font-bold'>Корзина</h1>
        </div>
        <div className='grid grid-cols-5 gap-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
          {basket.map((product) => {
            return (
              <div key={product.id} className='h-[380px] border p-5 rounded-lg content-between border-gray-300 transition-all hover:shadow-xl cursor-pointer'>
                <Link to={`/product/${product.id}`}>
                  <img src={product.img} alt="" className='w-[200px] h-[200px] flex justify-center' />
                  <h1 className='mt-8'>{product.title}</h1>
                  <h3 className='inline-block mt-8'>{product.price}</h3>
                </Link>
                <BiTrash onFocus={() => onFocus()} color='red' size={30} className='ml-[150px] relative bottom-6 z-0 inline-block' onClick={() => onDelete(product.id)} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  else {
    return (
      <div className='mb-9 mt-[-40px]'>
        <div className='flex justify-center items-center'>
          <img src={EmptyImg} alt="" className='w-[400px] h-[400px]' />
        </div>
        <h1 className='text-4xl font-bold text-center'>Ваша корзина на данный момент пуста...</h1>
          <Link to={'/'} className='flex justify-center items-center mt-8 w-full'>
            <button className='w-[40%] max-sm:w-[70%] h-[60px] rounded-xl bg-gradient-to-r from-green-600 to-emerald-700 text-lg font-medium transition text-white hover:shadow-md hover:shadow-emerald-600'>
              Начать покупать
            </button>
          </Link>
      </div>
    )
  }
}

export default Basket