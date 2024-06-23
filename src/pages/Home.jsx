import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='grid gap-4'>
          <h1 className='text-4xl max-sm:text-3xl p-4 text-center font-bold from-emerald-500 via-emerald-500 to-emerald-700 bg-gradient-to-r bg-clip-text text-transparent'>
            Добро пожаловать на наш веб-сайт!
          </h1>
          <Link to={'/login'} className='w-full flex justify-center text-lg text-white'>
            <button className='transition hover:shadow-md hover:shadow-emerald-600 flex justify-center items-center bg-gradient-to-r from-emerald-500 to-green-600 w-[250px] h-[50px] rounded-xl'>Login</button>
          </Link>
          <h3 className='text-center underline text-green-600 decoration-green-600 '>или</h3>
          <Link to={'/register'} className='w-full flex justify-center text-lg text-white'>
            <button className='transition hover:shadow-md hover:shadow-emerald-600 flex justify-center items-center bg-gradient-to-r from-emerald-500 to-green-600 w-[250px] h-[50px] rounded-xl'>Register</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home