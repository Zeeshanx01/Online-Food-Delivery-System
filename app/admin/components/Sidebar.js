import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className='w-[25%] min-h-[85vh] bg-slate-700 bg-opacity-75 rounded-lg'>
      <div className="logo flex m-5 gap-2 items-center">
        <img width={'50'} src="icon.gif" alt="" />
        <h1 className='font-bold text-3xl '>OFDS Admin Page</h1>
      </div>
      <ul className='flex flex-col gap-2 m-4'>
        <Link className='bg-slate-800 rounded-md px-4 py-3 font-bold text-lg text-slate-300' href="/admin"><li>Dashboard</li></Link>
        <Link className='bg-slate-800 rounded-md px-4 py-3 font-bold text-lg text-slate-300' href="/admin/foodform"><li>Food Items Form</li></Link>
        <Link className='bg-slate-800 rounded-md px-4 py-3 font-bold text-lg text-slate-300' href="/admin/adminfood"><li>Food Items</li></Link>
        <Link className='bg-slate-800 rounded-md px-4 py-3 font-bold text-lg text-slate-300' href="/admin/restaurantform"><li>Restaurant Form</li></Link>
        <Link className='bg-slate-800 rounded-md px-4 py-3 font-bold text-lg text-slate-300' href="/admin/adminrestaurant"><li>Restaurants</li></Link>
      </ul>
    </div>
  )
}

export default Sidebar
