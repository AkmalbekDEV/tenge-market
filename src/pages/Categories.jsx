import React from 'react'
import { FaCarSide } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaHeadphonesAlt } from 'react-icons/fa'
import { GiKitchenScale } from 'react-icons/gi'
import { TbToolsKitchen2 } from 'react-icons/tb'
import { PiTelevisionSimpleFill } from 'react-icons/pi'
import { TbMoodKidFilled } from 'react-icons/tb'

const Categories = () => {
  return (
    <div className='grid gap-3 p-5 bg bg-white rounded-xl'>
      <Link to={'/Auto'}>
        <div className='flex items-center gap-5'>
          <FaCarSide color='blue' size={25} />
          <h1 className='text-lg font-medium'>Автотовары</h1>
        </div>
      </Link>
      <div className='w-full border-b border-gray-400'></div>
      <Link to={'/Electric'}>
        <div className='flex items-center gap-5'>
          <FaHeadphonesAlt color='gray' size={23} />
          <h1 className='text-lg font-medium'>Телефоны и гаджеты</h1>
        </div>
      </Link>
      <div className='w-full border-b border-gray-400'></div>
      <Link to={'/Technic'}>
        <div className='flex items-center gap-5'>
          <GiKitchenScale color='blueviolet' size={23} />
          <h1 className='text-lg font-medium'>Техника для дома</h1>
        </div>
      </Link>
      <div className='w-full border-b border-gray-400'></div>
      <Link to={'/Kitchen'}>
        <div className='flex items-center gap-5'>
          <TbToolsKitchen2 color='orange' size={23} />
          <h1 className='text-lg font-medium'>Кухонная техника</h1>
        </div>
      </Link>
      <div className='w-full border-b border-gray-400'></div>
      <Link to={'/Television'}>
        <div className='flex items-center gap-5'>
          <PiTelevisionSimpleFill color='gray' size={23} />
          <h1 className='text-lg font-medium'>Телевизоры и аудиотехника</h1>
        </div>
      </Link>
      <div className='w-full border-b border-gray-400'></div>
      <Link to={'/Kids'}>
        <div className='flex items-center gap-5'>
          <TbMoodKidFilled color='violet  ' size={23} />
          <h1 className='text-lg font-medium'>Детские товары</h1>
        </div>
      </Link>
      <div className='w-full border-b border-gray-400'></div>
    </div>
  )
}

export default Categories

// Телефоны и гаджеты | Техника для дома | Кухонная техника | Телевизоры и аудиотехника | Детские товары