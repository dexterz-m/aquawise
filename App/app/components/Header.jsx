import React from 'react'
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs'
import Link from 'next/link';

const Header = () => {
  return (
    
      <div className="navbar px-10 bg-base-500">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl">AquaWise</a>
        </div>
      

      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-48 p-2 shadow">
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