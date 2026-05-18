import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='relative   h-64 w-64  ml-8'>
      <h2 className='absolute top-4  h-54 w-54'>welcome to SmartPark Stock Inventory Management System  </h2>
     <Link to="/login"> <button className='absolute top-28 left-20 hover:text-[blue] animate-bounce  hover:shadow-xl shadow-black rounded px-1'>Login</button></Link>
    <Link to="/register">   <button className='absolute top-28 left-34 hover:text-[green] animate-bounce hover:shadow-xl shadow-black rounded px-1 '>Register</button></Link>

    </div>
  )
}

export default Home
