import React from 'react'
import Link from 'next/link'

const PreHeader = () => {
  return (
    
      <div className="navbar px-10 bg-tuna-900 pt-5">
        <div className="flex-1">
          <Link href={"/profile"} className="btn btn-ghost text-3xl font-inter font-bold text-anakiwa-500">AquaWise</Link>
        </div>
      </div>
      
  )
}

export default PreHeader