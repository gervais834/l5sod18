import React from 'react'

function AddSparePart() {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center'>
      <div className=' overflow-y-auto  w-54 h-30  rounded shadow-xl shadow-black/60 gap-2'>
        <h1 className='m-4 '>Record a new Spare part </h1>
        <input type="text" placeholder='Type in sparepart name' className='px-[2px]'/>
         <select name="" id="">
            <option value="">...select...</option>
            <option value="">Tyres</option>
            <option value="">Glass</option>
         </select>
        <input type="number" placeholder='Type in sparepart quantity'/>

        <button type='submit'>Add new</button>
      </div>
    </div>
  )
}

export default AddSparePart
