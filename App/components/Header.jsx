import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    
      <div className="navbar px-10 bg-tuna-900 pt-5">
        <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-3xl font-inter font-bold text-anakiwa-500">AquaWise</Link>
        </div>
      

      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-shuttle-gray-700 rounded-box z-[1] mt-3 w-48 p-2 shadow">
            <li>
              <a>Profile</a>
            </li>

            <li>
              <a>Counter</a>
            </li>

            <li>
              <a>Logout</a>
            </li>

          </ul>
        </div>
      </div>
      </div>
  )
}

export default Header