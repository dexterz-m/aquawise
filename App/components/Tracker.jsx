'use client'
import React, { useState } from 'react'

const Tracker = () => {
  
  let [dailyConsumption, setDailyConsumption] = useState(1800)
  let [allConsumption, setAllConsumption] = useState(1800/1000)

  const [volume, setVolume] = useState(0)

  let [target, setTarget] = useState(3000)

  const valueOptions = []

  return (
    <div className='bg-tuna-900 p-5 h-screen flex flex-col items-center'>

      <div className='mb-10'>
        <p className='text-3xl font-bold text-black-haze-100'>Tracker</p>
      </div>

      <div className="stats flex bg-shuttle-gray-800 text-primary-content h-32 w-3/4 max-w-xl shadow-xl mt-10 mb-10">
        <div className="stat p-5">
          <div className="stat-title text-black-haze-100 text-center overflow-auto"><p className='text-md'>Today</p></div>
          <div className="stat-value text-anakiwa-500 text-center">{dailyConsumption} ml</div>
        </div>

        <div className="stat p-5">
          <div className="stat-title text-black-haze-100 text-center"><p className='text-md'>Total</p></div>
          <div className="stat-value text-anakiwa-500 text-center">{allConsumption} L</div>
        </div>
      </div>

      <div className="card min-w-40 w-xl max-w-3xl">
        <p className='text-center font-extrabold text-xl mt-5 mb-5 text-black-haze-100'>Daily Progress</p>
        <progress className="progress progress-success bg-shuttle-gray-800 w-56 h-5 shadow-xl" value={dailyConsumption} max={target}></progress>
      </div>

      <div className="card bg-shuttle-gray-800 min-w-sm w-4/6 max-w-md shadow-xl mt-20 mb-20 py-2">
        <div className="stat p-5">
          <div className="stat-title text-black-haze-100 text-center overflow-auto">Register consumption</div>
            <div className='flex items-center'>
              <input type="number" placeholder="Enter ml" className="input w-24 my-5 ml-5 mr-2 max-w-xs no-arrows" value={volume} onChange={(e) => setVolume(e.target.value)} />
              <p className='text-black-haze-100'>ml</p>
              <select value={volume} onChange={(e) => setVolume(e.target.value)} className="select select-bordered w-50 max-w-xs mx-5">
                <option value={0}>Presets</option>
                <option value={240}>Glass of water ( 240 ml )</option>
                <option value={500}>Water Bottle ( 500 ml )</option>
                <option value={200}>Plastic Cup ( 200 ml )</option>
                <option value={750}>Sports Bottle ( 750 ml )</option>
              </select>
            </div>
            <button className="btn bg-anakiwa-600 hover:bg-anakiwa-700 text-black-haze-100 w-md mx-5 border-transparent focus:border-transparent focus:ring-0 hover:border-transparent hover:ring-0">Contribute</button>
        </div>
      </div>

    </div>
  )
}

export default Tracker