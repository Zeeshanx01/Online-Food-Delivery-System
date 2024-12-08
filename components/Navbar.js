'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const [showDropdown, setshowDropdown] = useState(false)
  const { data: session } = useSession()

  return (
    // <div className=" flex justify-center  bg-white h-[10vh]">
    <div className="w-full flex items-center justify-evenly bg-black bg-opacity-70 h-[10vh] sticky top-0 z-20">

      <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
        Online-<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Food-Delivery</span>
      </a>

      {/* <div className="flex w-1/2 justify-end content-center">
          <a className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://twitter.com/intent/tweet?url=#">
            <svg className="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path
                d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"
              ></path>
            </svg>
          </a>
          <a
            className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
            href="https://www.facebook.com/sharer/sharer.php?u=#"
          >
            <svg className="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
            </svg>
          </a>
        </div> */}

      <ul className='flex justify-center items-center gap-3'>

        <li>
          <Link href="/" className=""><img width={'50'} src="/home.gif" alt="home" /></Link>
        </li>


        <li>
          <Link href="/restaurants" className=""><img width={'50'} src="/restaurant.gif" alt="home" /></Link>
        </li>

        <li>
          <Link href="/products" className=""><img width={'50'} src="/food.gif" alt="home" /></Link>
        </li>


        <div className='relativee'>


          {session && <>
            <button onClick={() => { setshowDropdown(!showDropdown) }} onBlur={() => { setTimeout(() => { setshowDropdown(false) }, 200) }} id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="duration-500 text-white bg-gradient-to-r from-purple-500 via-purple-6000 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex justify-center items-center shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-full text-xs p-[3px]" type="button"><img className='rounded-full' width={'40px'} src={session.user.image} alt="profile image" />
            </button>



            <div id="dropdownInformation" className={`z-10 ${showDropdown ? "" : "hidden"} absolute top-20 max-sm:top-16 max-sm:right-20 bg-slate-800 divide-y divide-slate-600 text-slate-300 rounded-lg shadow w-fit dark:bg-gray-700 dark:divide-gray-600`}>

              <div className="px-4 py-3 text-sm text-slate-300 font-bold dark:text-white">
                <div>{session.user.name}</div>
                <div className="font-medium truncate">{session.user.email}</div>
              </div>

              <ul className="py-2 text-sm text-slate-400 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                <li>
                  <Link onClick={() => { setshowDropdown(!showDropdown) }} href="/admin" className="duration-200 block px-4 py-2 hover:bg-slate-700 dark:hover:bg-gray-600 dark:hover:text-white">Admin page</Link>
                </li>
                <li>
                  <Link onClick={() => { setshowDropdown(!showDropdown) }} href="/dashboard" className="duration-200 block px-4 py-2 hover:bg-slate-700 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                  <Link onClick={() => { setshowDropdown(!showDropdown) }} href="#" className="duration-200 block px-4 py-2 hover:bg-slate-700 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                </li>
                <li>
                  <Link onClick={() => { setshowDropdown(!showDropdown) }} href="#" className="duration-200 block px-4 py-2 hover:bg-slate-700 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                </li>
              </ul>

              <div className="py-2">
                <button href="#" onClick={() => {
                  signOut();
                  setshowDropdown(!showDropdown);
                }}
                  className="w-full text-start duration-200 block px-4 py-2 text-sm text-slate-400 hover:bg-red-950 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
              </div>

            </div>
          </>}

          {!session && <Link href={'/login'}>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-6000 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-xs px-4 py-2 text-center me-222 mb-222">Login</button>
          </Link>}

        </div>
      </ul>

    </div>
    // </div>
  )
}

export default Navbar
