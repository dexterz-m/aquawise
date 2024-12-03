'use client'
import React, { useState } from 'react'


const Tracker = () => {

  const [volume, setVolume] = useState(0)

  const valueOptions = []

  return (
    <div className='bg-tuna-900 p-10'>
      <div className="stats flex bg-shuttle-gray-800 text-primary-content h-32 max-w-2xl shadow-xl">
        <div className="stat p-5">
          <div className="stat-title text-black-haze-100 text-center">Water consumption today</div>
          <div className="stat-value text-anakiwa-500 text-center">230 ml</div>
        </div>

        <div className="stat p-5">
          <div className="stat-title text-black-haze-100 text-center">All time water consumption</div>
          <div className="stat-value text-anakiwa-500 text-center">27.8 L</div>
        </div>
      </div>

      
      <div className="card bg-shuttle-gray-800 w-auto shadow-xl mt-20">
        <div className="card-body">
          <div className="card-actions justify-center">
            <select value={volume} onChange={(e) => setVolume(e.target.value)} className="select select-bordered w-full max-w-xs">

              <option disabled value={0}>Select amount of ml</option>
              <option value={240}>Glass of water ( 240 ml )</option>
              <option value={500}>Water Bottle ( 500 ml )</option>
              <option value={0}></option>
              <option value={0}></option>

            </select>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Tracker