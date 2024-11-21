import React from 'react'

const Hero = () => {
  return (
    <div className="py-32 px-20 min-h-screen bg-tuna-900">
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="text-neutral-content text-center">
        <div>
          <h1 className="mb-20 text-5xl text-anakiwa-500">Stay Hydrated Daily</h1>
          <p className="mb-5 text-3xl text-black-haze-100 font-extralight">
            Monitor your hydration throughout the day and reach your health goals with our easy-to-use water intake tracker.
          </p>
          <button className="btn btn text-xl text-black-haze-100 mt-10 bg-anakiwa-500 font-medium hover:bg-anakiwa-700">Start Today!</button>
        </div>
      </div>

      <div className="join flex join-horizontal mt-32 space-x-10">
        <div className="card w-56 bg-shuttle-gray-700">
          <div className="card-body">
            <h2 className="card-title text-anakiwa-500">Tracker</h2>
            <p>Track your water intake whenever you want</p>
          </div>
        </div>

        <div className="card w-56 bg-shuttle-gray-700">
          <div className="card-body">
            <h2 className="card-title text-anakiwa-500">Leaderboard</h2>
            <p>Compete with others</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero