import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductContext } from '../../context/ProductContext';
import { BiCart } from 'react-icons/bi';
import { BasketContext } from '../../context/BasketContext';
import { Link } from 'react-router-dom';


const SaleCarousel = () => {
    const { getBasketData } = useContext(BasketContext)
    const state = useContext(ProductContext)

    return (
        <div>
            <div className='mt-12 bg-white rounded-xl p-6'>
                <h1 className='text-2xl mb-5 font-bold'>Любителям Apple</h1>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    className="mySwiper"
                    breakpoints={{
                        1120: {
                            slidesPerView: 5,
                        },
                        900: {
                            slidesPerView: 4,
                        },
                        700: {
                            slidesPerView: 3,
                        },
                        420: {
                            slidesPerView: 2,
                        },
                        380: {
                            slidesPerView: 1.2
                        },
                        100: {
                            slidesPerView: 1,
                        }
                    }}
                >
                    {state.map((product) => {
                        if (product.category == "android") {
                            return (
                                <SwiperSlide key={product.id} className='grid h-[380px] border p-5 rounded-lg content-between border-gray-300 transition-all hover:shadow-2xl cursor-pointer'>
                                    <Link to={`/product/${product.id}`}>
                                        <img src={product.img} alt="" className='w-[200px] h-[200px] flex justify-center' />
                                        <h1 className='mt-8'>{product.title}</h1>
                                        <h3 className='inline-block mt-8'>{product.price}</h3>
                                    </Link>
                                    <BiCart onClick={() => getBasketData(product)} size={30} className='ml-[150px] relative bottom-6 z-0 inline-block' />
                                </SwiperSlide>
                            )
                        }
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default SaleCarousel