import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState("")
  const { setIsAuth } = useContext(AuthContext)

  const postData = async (data) => {
    try {
      const response = await axios.post('https://e9ee7811541ee9ce.mokky.dev/auth', data)
      if (response.status === 201) {
        setIsAuth(true);
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user-info', JSON.stringify(response.data.data))
      } 
    } catch (error) {
      setErrorMsg(error.response.data.message);
    }
  }

  const handleData = (e) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    postData(data)
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='p-5 rounded-xl shadow grid gap-4'>
        <h1 className='text-xl font-bold text-center'>Вход</h1>
        <form onSubmit={handleData} className='grid gap-3'>
          <input name='email' type="email" placeholder='Электронная почта...' className='w-[350px] max-sm:w-[300px] h-[40px] outline-none border rounded-md pl-4' />
          <input name='password' type="password" placeholder='Код безопасности...' className='w-[350px] max-sm:w-[300px] h-[40px] outline-none border rounded-md pl-4' />
          <p className='text-red-500 text-center'>{errorMsg}</p>
          <button className='w-[350px] max-sm:w-[300px] h-[40px] text-white text-base bg-green-600 rounded-md transition hover:shadow-md hover:shadow-green-600'>Вход</button>
        </form>
        <h3 className='underline decoration-green-600 text-green-600 text-center'>Нет аккаунт?</h3>
        <button onClick={() => navigate('/register')} className='w-[350px] max-sm:w-[300px] h-[40px] text-white text-base bg-green-600 rounded-md transition hover:shadow-md hover:shadow-green-600'>Зарегистрироваться</button>
      </div>
    </div>
  )
}

export default Login