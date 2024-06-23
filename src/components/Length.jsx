import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketContext'

const Length = () => {
    const { basket } = useContext(BasketContext)

    if (basket.length > 0) {
        return (
            <div className='flex justify-center items-center w-[15px] h-[15px] text-xs text-white rounded-[50%] bg-green-600'>
                {basket.length}
            </div>
        )
    }
}

export default Length