import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useNavigate } from 'react-router-dom'
import xiaomiLogo from '../../assets/xiaomiLogo.png'
import samsungLogo from '../../assets/samsungLogo.jpg'
import appleLogo from '../../assets/appleLogo.png'
import shivakiLogo from '../../assets/shivakiLogo.png'
import artelLogo from '../../assets/artelLogo.jpg'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/navigation'

const BrandCarousel = () => {
    const navigate = useNavigate()

    return (
        <div className='rounded-xl bg-white py-8 mt-12 max-lg:hidden'>
            <h1 className='text-2xl font-bold ml-8'>Популярные бренды</h1>
            <Swiper
                modules={[Navigation, Pagination]}
                pagination={true}
                navigation={true}
                slidesPerView={4}
                spaceBetween={110}
                className="mySwiper flex items-center p-4 w-full px-16"
            >
                <SwiperSlide onClick={() => navigate('/brandXiaomi')} className='flex justify-center items-center rounded-xl px-4 cursor-pointer transition-all bg-white hover:drop-shadow-lg'>
                    <img className='w-[200px]' src={xiaomiLogo} alt="" />
                </SwiperSlide>
                <SwiperSlide onClick={() => navigate('/brandSamsung')} className='flex justify-center items-center rounded-xl px-4 cursor-pointer transition-all bg-white hover:drop-shadow-lg py-3'>
                    <img className='w-[200px]' src={samsungLogo} alt="" />
                </SwiperSlide>
                <SwiperSlide onClick={() => navigate('/brandApple')} className='flex justify-center items-center rounded-xl px-4 cursor-pointer transition-all bg-white hover:drop-shadow-lg'>
                    <img className='w-[150px] text-center' src={appleLogo} alt="" />
                </SwiperSlide>
                <SwiperSlide onClick={() => navigate('/brandShivaki')} className='flex justify-center items-center rounded-xl px-4 cursor-pointer transition-all bg-white hover:drop-shadow-lg py-9'>
                    <img className='w-[200px]' src={shivakiLogo} alt="" />
                </SwiperSlide>
                <SwiperSlide onClick={() => navigate('/brandArtel')} className='flex justify-center items-center rounded-xl px-4 cursor-pointer transition-all bg-white hover:drop-shadow-lg py-3'>
                    <img className='w-[200px]' src={artelLogo} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default BrandCarousel