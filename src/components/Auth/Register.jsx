import React, { useContext, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState("")
  const { setIsAuth } = useContext(AuthContext)

  const postData = async (data) => {
    try {
      const response = await axios.post('https://e9ee7811541ee9ce.mokky.dev/register', data)
      if (response.status === 201) {
        localStorage.setItem('user-info', JSON.stringify(response.data.data))
        localStorage.setItem('token', response.data.token)
        setIsAuth(true)
      }
    } catch (error) {
      setErrorMsg(error.response.data.message);
    }
  }

  const handleData = (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const retypePassword = e.target.retypePassword.value;
    if (password.length < 6) {
      setErrorMsg("Код должен быть длиной не менее 6 символов.")
      return;
    }
    if (password !== retypePassword) {
      setErrorMsg("Пароль не совпал")
      return;
    }
    setErrorMsg("")

    const data = {
      fullName,
      email,
      password
    }
    postData(data)
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='p-5 rounded-xl shadow grid gap-4'>
        <h1 className='text-xl font-bold text-center'>Зарегистрироваться</h1>
        <form onSubmit={handleData} className='grid gap-3'>
          <input name='fullName' type="text" placeholder='Полное имя...' className='w-[350px] max-sm:w-[300px] h-[40px] outline-none border rounded-md pl-4' />
          <input name='email' type="email" placeholder='Электронная почта...' className='w-[350px] max-sm:w-[300px] h-[40px] outline-none border rounded-md pl-4' />
          <input name='password' type="password" placeholder='Код безопасности...' className='w-[350px] max-sm:w-[300px] h-[40px] outline-none border rounded-md pl-4' />
          <input name='retypePassword' type="password" placeholder='Перепишите код...' className='w-[350px] max-sm:w-[300px] h-[40px] outline-none border rounded-md pl-4' />
          <p className='text-red-500 text-center'>{errorMsg}</p>
          <button className='w-[350px] max-sm:w-[300px] h-[40px] text-white text-base bg-green-600 rounded-md transition hover:shadow-md hover:shadow-green-600'>Зарегистрироваться</button>
        </form>
        <h3 className='underline decoration-green-600 text-green-600 text-center'>Есть аккаунт?</h3>
        <button onClick={() => navigate('/login')} className='w-[350px] max-sm:w-[300px] h-[40px] text-white text-base bg-green-600 rounded-md transition hover:shadow-md hover:shadow-green-600'>Вход</button>
      </div>
    </div>
  )
}

export default Register