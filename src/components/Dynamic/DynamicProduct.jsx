import React, { useContext } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { BiCart } from 'react-icons/bi'
import { BasketContext } from '../../context/BasketContext'

const DynamicProduct = () => {
    const params = useParams()
    const [data, setData] = useState([])
    let exit = useNavigate()
    const { getBasketData } = useContext(BasketContext)

    const getData = async () => {
        try {
            const response = await axios.get(`https://e9ee7811541ee9ce.mokky.dev/AllProducts/${params.id}`)
            setData(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [params.id])

    return (
        <div className='flex items-center py-5 rounded-xl bg-white max-md:grid text-center'>
            <FaArrowLeft className='relative bottom-[230px] max-md:bottom-0 cursor-pointer left-7' size={30} onClick={() => exit(-1)} />
            <div className='max-sm:w-full flex justify-center items-center'>
                <img src={data.img} alt="" className='w-auto h-[500px] object-contain' />
            </div>
            <div className='w-full px justify-start items-center text-center px-5'>
                <div className='grid gap-10'>
                    <h1 className='text-2xl font-medium'>{data.title}</h1>
                    <div className='grid gap-1'>
                        <h3 className='text-gray-600 font-medium'>Цена</h3>
                        <h1 className='text-xl font-medium'>{data.price}</h1>
                    </div>
                    <div className='grid gap-1'>
                        <h3 className='text-gray-600 font-medium'>Продавец</h3>
                        <h1 className='text-xl font-medium'>Mega Shop</h1>
                    </div>
                    <div className='flex gap-4 items-center justify-center'>
                        <button className='w-[250px] h-[60px] rounded-lg max-sm:w-[180px] bg-gradient-to-r from-green-600 to-emerald-700 text-lg font-medium transition text-white hover:shadow-md hover:shadow-emerald-600'>
                            Оплатить картой
                        </button>
                        <button className='w-[70px] h-[60px] rounded-lg border-2 max-sm: border-green-600 flex justify-center items-center'>
                            <BiCart onClick={() => getBasketData(data)} size={30} color='green' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DynamicProduct