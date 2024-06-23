import React, { useContext, useState } from 'react'
import Logo from '../assets/logo.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import Length from './Length';
import { SearchContext } from '../context/SearchContext';

const Navbar = () => {
  const navigate = useNavigate()
  const { getData } = useContext(SearchContext)

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/search')
    getData(e.target.search.value)
  }

  return (
    <nav className='flex justify-between items-center w-full max-sm:gap-3'>
      <Link to={"/"} className='max-md:hidden'>
        <img src={Logo} alt="" />
      </Link>
      <form onSubmit={handleSearch} className='w-[800px] h-[45px] rounded-md border-2 border-green-600 flex items-center max-lg:w-[600px] max-md:w-[380px] max-sm:w-[300px]'>
        <input name='search' type="text" placeholder='Найти в Tenge Market' className='w-[75%] max-sm:w-full h-full rounded-t-md rounded-bl-md bg-transparent pl-4 outline-none' />
        <button className='w-[80px] h-[30px] rounded-md bg-green-600 ml-[110px] max-lg:ml-[60px] max-md:ml-[30px] max-sm:ml-1 text-white cursor-pointer transition max-sm:hidden hover:bg-green-800'>Найти</button>
      </form>
      <Link to={"/Basket"}>
        <div className='grid'>
          <div className='flex justify-center'>
            <BiCart size={25} />
            <Length />
          </div>
          <h4>Корзина</h4>
        </div>
      </Link>
    </nav>
  )
}

export default Navbar