import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Userrequest = () => {
  return (
    <div className='w-full pt-10 h-[500px] flex flex-col justify-start items-center gap-10'>
        <h1 className='text-center text-3xl font-semibold'>Pass Type</h1>
        <div className='flex justify-center gap-5'>
            <NavLink to="/student/request/Regularpass" className={({isActive}) => `${isActive? 'bg-yellow-400' : 'hover:bg-yellow-100'} rounded-md`}><button className='px-3 py-2 border-2 border-yellow-400 rounded-md'>Regular Pass</button></NavLink>
            <NavLink to="/student/request/Homepass" className={({isActive}) => `${isActive? 'bg-yellow-400' : 'hover:bg-yellow-100'} rounded-md`}><button className='px-3 py-2 border-2 border-yellow-400  rounded-md'>Home Pass</button></NavLink>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Userrequest