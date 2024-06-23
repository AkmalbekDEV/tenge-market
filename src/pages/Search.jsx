import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext';
import { BasketContext } from '../context/BasketContext';
import { BiCart } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Search = () => {
    const { state, data } = useContext(SearchContext)
    const { getBasketData } = useContext(BasketContext)

    return (
        <div className='bg-white p-7 rounded-xl shadow-md'>
            <h1 className='text-black text-2xl font-bold mb-5'>По запросу «{data}» найдено</h1>
            <div className='grid grid-cols-5 gap-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
                {state.map((product) => {
                    const value = product.title;
                    const capitalizeUp = data.charAt(0).toUpperCase() + data.slice(1);
                    const capitalizeDown = data.charAt(0).toLowerCase() + data.slice(1);
                    if (value.includes(capitalizeUp) || value.includes(capitalizeDown)) {
                        return (
                            <div key={product.id} className='h-[380px] border p-5 rounded-lg content-between border-gray-300 transition-all hover:shadow-xl cursor-pointer'>
                                <Link to={`/search/searchProducts/${product.id}`}>
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
        </div>
    )
}

export default Search