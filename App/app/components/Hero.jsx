import React from 'react'

const Hero = () => {
  return (
    <div
      className="py-36 px-20 min-h-screen bg-tuna-900"
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="text-neutral-content text-center">
        <div>
          <h1 className="mb-5 text-5xl text-anakiwa-500">Stay Hydrated Daily</h1>
          <p className="mb-5 text-3xl text-black-haze-100 font-extralight">
            Monitor your hydration throughout the day and reach your health goals with our easy-to-use water intake tracker.
          </p>
          <button className="btn btn-lg text-xl text-black-haze-100 mt-10 bg-anakiwa-500 font- font-medium ">Start Today!</button>
        </div>
      </div>
    </div>
  )
}

export default Hero