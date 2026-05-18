import React from 'react'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div className='flex items-center justify-center min-h-screen  '>
         <div className='flex flex-col h-36 w-40 shadow-xl rounded shadow-black '>
          <h1 className='text-black font-bold justify-center items-center flex  '>Please, Register!</h1>
            <form method='post' className='overflow-y-auto '>
               <input type="text"
               className='text-[8px] ring-1 ring-gray-400 text-center px-[26px]  py-[5px] ml-2 focus:ring-2 outline-none rounded hover:cursor-pointer  focus:ring-blue-700 '
               placeholder='Type In Username'
                />
                <input type="email"
               className='text-[8px] ring-1 ring-gray-400
                text-center px-[26px]  py-[5px] ml-2 focus:ring-2 outline-none rounded hover:cursor-pointer  focus:ring-blue-700 '
               placeholder='Type In Email'
                />
               <input type="password"
               className='text-[8px] ring-1 ring-gray-400
                text-center px-[26px]  py-[5px] ml-2 focus:ring-2 outline-none rounded hover:cursor-pointer  focus:ring-blue-700 '
               placeholder='Type In Password' />

               <button className='bg-blue-700 text-black hover:bg-blue-800 rounded  px-14 ml-3  py-[2px] text-[10px] font-bold  '>Login</button> <br />

              <div className='flex  space-x-4 top-4 left-2'>
                 <p className='text-[10px] '>Already have Account! </p> <Link to="/Login" className='text-[10px] hover:text-blue-700 '>Login</Link>
              </div>
            </form>





         </div>
    </div>
  )
}

export default Register
