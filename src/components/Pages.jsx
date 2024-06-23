import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PiLineVerticalThin } from 'react-icons/pi'
import { FaArrowLeft } from 'react-icons/fa'

const Pages = () => {
  const navigate = useNavigate()

  return (
    <div className='flex justify-between items-center max-sm:gap-5'>
      <FaArrowLeft onClick={() => navigate(-1)} size={20} className='cursor-pointer hidden max-sm:block' />
      <Link to={'/Categories'} className='w-full hidden max-sm:block'>
        <button className='w-full h-[40px] rounded-lg bg-green-600 transition-all text-white hidden max-sm:block cursor-pointer hover:shadow-md hover:shadow-green-600 active:bg-green-900'>Категории</button>
      </Link>
      <Link to='/Auto' className='max-sm:hidden'>Автотовары</Link>
      <PiLineVerticalThin className='max-sm:hidden' />
      <Link to='/Electric' className='max-sm:hidden'>Телефоны и гаджеты</Link>
      <PiLineVerticalThin className='max-sm:hidden' />
      <Link to='/Technic' className='max-sm:hidden'>Техника для дома</Link>
      <PiLineVerticalThin className='max-sm:hidden' />
      <Link to='/Kitchen' className='max-sm:hidden'>Кухонная техника</Link>
      <PiLineVerticalThin className='max-md:hidden' />
      <Link to='/Television' className='max-md:hidden'>Телевизоры и аудиотехника</Link>
      <PiLineVerticalThin className='max-lg:hidden' />
      <Link to='/Kids' className='max-lg:hidden'>Детские товары</Link>
    </div>
  )
}

export default Pages