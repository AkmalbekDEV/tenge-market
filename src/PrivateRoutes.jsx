import React from 'react'
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'
import Pages from './components/Pages'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auto from './pages/Auto'
import Electric from './pages/Electric'
import Kids from './pages/Kids'
import Kitchen from './pages/Kitchen'
import Technic from './pages/Technic'
import Television from './pages/Television'
import DynamicApple from './components/Dynamic/DynamicProduct'
import Basket from './pages/Basket'
import Footer from './components/Footer'
import BrandXiaomi from './pages/brandXiaomi'
import BrandSamsung from './pages/brandSamsung'
import BrandApple from './pages/brandApple'
import BrandShivaki from './pages/brandShivaki'
import BrandArtel from './pages/brandArtel'
import HomePage from './pages/homePage'
import Search from './pages/Search'
import DynamicProduct from './components/Dynamic/DynamicProduct'
import Categories from './pages/Categories'

const PrivateRoutes = () => {
    return (
        <div>
            <div className='bg-[#03002b] py-2'>
                <div className='max-w-[1250px] m-auto max-lg:px-7'>
                    <Topbar />
                </div>
            </div>
            <div className='bg-gray-100 py-5'>
                <div className='max-w-[1250px] m-auto max-lg:px-7'>
                    <Navbar />
                </div>
            </div>
            <div className='bg-white py-4'>
                <div className='max-w-[1250px] m-auto max-lg:px-7'>
                    <Pages />
                </div>
            </div>
            <div className='bg-gray-100 py-8'>
                <div className='max-w-[1250px] m-auto  max-lg:px-7'>
                    <Routes>
                        <Route path='/Auto' element={<Auto />} />
                        <Route path='/' element={<HomePage />} />
                        <Route path='/register' element={<HomePage />} />
                        <Route path='/login' element={<HomePage />} />
                        <Route path='/Electric' element={<Electric />} />
                        <Route path='/Technic' element={<Technic />} />
                        <Route path='/Kitchen' element={<Kitchen />} />
                        <Route path='/Television' element={<Television />} />
                        <Route path='/Kids' element={<Kids />} />
                        <Route path='/product/:id' element={<DynamicProduct />} />
                        <Route path='/Basket' element={<Basket />} />
                        <Route path='/brandXiaomi' element={<BrandXiaomi />} />
                        <Route path='/brandSamsung' element={<BrandSamsung />} />
                        <Route path='/brandApple' element={<BrandApple />} />
                        <Route path='/brandShivaki' element={<BrandShivaki />} />
                        <Route path='/brandArtel' element={<BrandArtel />} />   
                        <Route path='/search' element={<Search />} />
                        <Route path='/categories' element={<Categories />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PrivateRoutes