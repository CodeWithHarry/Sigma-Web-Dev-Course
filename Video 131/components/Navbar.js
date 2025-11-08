/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  // if (session) {
  //     return (
  //         <>
  //             Signed in as {session.user.email} <br />
  //             <button className='cursor-pointer text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => signOut()}>Sign out</button>
  //         </>
  //     )
  // }
  return (
    <nav className='flex justify-between items-center mb-2 md:h-16 px-4 bg-black text-white flex-col md:flex-row'>
      <Link href={'/'} className="logo font-bold flex justify-center items-center">
        <img className='invertImg' width={44} src="tea.gif" alt="" />
        <span>GetMeAChai</span>
      </Link>
      {/* <ul className='flex justify-between gap-5'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>LogIn</li>
            </ul> */}
      <div className='relative'>
        {session && <>
          <button onClick={() => {
            setShowdropdown(!showdropdown)
          }
          }
            onBlur={() => {
              setTimeout(() => {
                setShowdropdown(false)
              }, 300);
            }
            }
            id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5  py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome  {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <div id="dropdown" className={`z-10 ${showdropdown ? '' : 'hidden'} absolute left-[125px] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.email.split('@')[0]}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>
              <li>
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div></>
        }
        {/* {session && <Link href="/login" className='text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer' onClick={() => {
                    signOut()
                }
                }>SignOut</Link>} */}

        {!session && <Link href={"/login"}>
          <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm mx-6 px-5 py-2.5 text-center me-2 '>Login</button></Link>}
      </div>
    </nav>
  )
}

export default Navbar
