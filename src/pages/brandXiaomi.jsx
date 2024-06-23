import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'
import { BiCart } from 'react-icons/bi'
import { BasketContext } from '../context/BasketContext'

const BrandXiaomi = () => {
    const { getBasketData } = useContext(BasketContext)
    const state = useContext(ProductContext)

    return (
        <div className='p-7 rounded-xl bg-white'>
            <h1 className='text-3xl font-bold mb-6'>Xiaomi</h1>
            <div className='grid grid-cols-5 gap-3'>
                {state.map((product) => {
                    if (product.brand == "xiaomi") {
                        return (
                            <div key={product.id} className='h-[380px] border p-5 rounded-lg content-between border-gray-300 transition-all hover:shadow-xl cursor-pointer'>
                                <Link to={`/product/${product.id}`}>
                                    <img src={product.img} alt="" className='w-[200px] h-[200px] flex justify-center' />
                                    <h1 className='mt-8'>{product.title}</h1>
                                    <h3 className='inline-block mt-8'>{product.price}</h3>
                                </Link>
                                <BiCart onClick={() => getBasketData(product)} size={30} className='ml-8 z-0 inline-block' />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default BrandXiaomi