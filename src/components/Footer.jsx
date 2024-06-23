import React from 'react'
import Logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <div className='bg-[#03002b] py-16'>
            <div className="max-w-[1050px] m-auto max-lg:px-7">
                <div className='flex justify-center'>
                    <img src={Logo} alt="" className='flex' />
                </div>
                <div className='flex justify-between items-center mt-[40px] max-sm:grid gap-7 max-sm:text-center w-full'>
                    <div className='grid gap-5'>
                        <h1 className='text-2xl font-medium text-white'>Покупателям</h1>
                        <div className='grid gap-2'>
                            <h3 className='text-base text-white'>Как сделать заказ?</h3>
                            <h3 className='text-base text-white'>Доставка</h3>
                            <h3 className='text-base text-white'>Политика возврата</h3>
                        </div>
                    </div>
                    <div className='grid gap-5'>
                        <h1 className='text-2xl font-medium text-white'>Партнерам</h1>
                        <div className='grid gap-2'>
                            <h3 className='text-base text-white'>Партнерская программа</h3>
                            <h3 className='text-base text-white'>Начать продажи с нами</h3>
                            <h3 className='text-base text-white'>Правила сотрудничества</h3>
                        </div>
                    </div>
                    <div className='grid gap-5'>
                        <h1 className='text-2xl font-medium text-white'>О нас</h1>
                        <div className='grid gap-2'>
                            <h3 className='text-base text-white'>О компании</h3>
                            <h3 className='text-base text-white'>Пользовательское соглашение Tenge Market</h3>
                            <h3 className='text-base text-white'>Служба поддержки</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer