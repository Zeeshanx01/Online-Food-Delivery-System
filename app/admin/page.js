import React from 'react'
import Sidebar from '@/components/Sidebar'
const admin = () => {
  return (
    <div className='flex gap-1'>

      <Sidebar />

      <div className='w-[75%]  bg-slate-600 bg-opacity-75 rounded-lg'>
        ADMINPAGE
      </div>

    </div>
  )
}

export default admin
