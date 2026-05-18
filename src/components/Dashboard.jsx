import React from 'react'
import { Link } from 'react-router-dom'
export default function Dashboard() {
  return (
    <div className='bg-white/60 min-h-screen flex  '>
    <div className='flex flex-col gap-2 bg-black/60 w-36 rounded h-36 overflow-y-auto text-center text-white'>

    <h1 className='font-bold mt-4'>  Dashboard</h1>
    <div className='flex flex-col rounded  '>
    <Link to="/"><button  className='hover:bg-green-800 py-[2px]  px-[20px] ml-2 text-[14px] rounded font-bold'>Home</button></Link>
    <Link to="/spareparts"><button  className='hover:bg-green-800 py-[2px]  px-[20px] ml-2 text-[14px] rounded font-bold'>SpareParts</button></Link>
    <Link to="/stockin"><button  className='hover:bg-green-800 py-[2px]  px-[20px] ml-2 text-[14px] rounded font-bold'>StockIn</button></Link>
    <Link to="/stockout"><button  className='hover:bg-green-800 py-[2px]  px-[20px] ml-2 text-[14px] rounded font-bold'>StockOut</button></Link>
    <Link to="/"><button  className=' text-white px-[25px] py-[5px]  font-bold  hover:text-red-800'>Logout</button></Link>

    </div>
      </div>
    </div>
  )
}
