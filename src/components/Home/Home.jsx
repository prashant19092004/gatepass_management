import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div
      class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    </div>
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="flex justify-center gap-5">
          <NavLink to="/" className={({isActive}) => `text-2xl font-semibold ${isActive?'text-sky-500' : 'text-black'}`}>User</NavLink>
          <NavLink to="/adminlogin" className={({isActive}) => `text-2xl font-semibold ${isActive?'text-sky-500' : 'text-black'}`}>Admin</NavLink>
        </div>
        <Outlet />
    </div>
  </div>
</div>
    </div>
  )
}

export default Home