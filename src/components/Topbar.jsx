import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Topbar = () => {
    const userData = JSON.parse(localStorage.getItem('user-info'))
    const { setIsAuth } = useContext(AuthContext)
    const logOut = () => {
        setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
        <div className='flex justify-between items-center max-sm:justify-around'>
            <div className='flex gap-12 text-white max-sm:hidden'>
                <a href="https://tengebank.uz/ru" target='_blank'>Tenge Bank</a>
                <a href="https://tengebank.uz/ru/more/tenge24" target='_blank'>Tenge24</a>
            </div>
            <h1 className='text-white'>{userData.fullName}</h1>
            <div className='flex items-center gap-12'>
                <h2 onClick={logOut} className='text-white cursor-pointer hover:underline'>Выход</h2>
                <select className='bg-transparent text-white cursor-pointer max-sm:hidden'>
                    <option className='cursor-pointer'>Русский</option>
                    <option className='cursor-pointer'>O'zbekcha</option>
                </select>
            </div>
        </div>
    )
}

export default Topbar