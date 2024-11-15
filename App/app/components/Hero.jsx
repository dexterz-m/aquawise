import React from 'react'

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg)",
      }}>
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-neutral-content text-center">
        <div>
          <h1 className="mb-5 text-5xl font-bold text-white">Stay Hydrated Daily</h1>
          <p className="mb-5 text-lg text-white">
          Monitor your hydration throughout the day and reach your health goals with our easy-to-use water intake tracker.
          </p>
          <button className="btn btn-lg text-lg mt-10 bg-opacity-20">Start Today!</button>
        </div>
      </div>
    </div>
  )
}

export default Hero