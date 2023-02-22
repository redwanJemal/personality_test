import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center mb-8">Discover Your Personality Type</h1>
      <p className="text-lg text-center mb-8">
        Take our personality test to gain insight into your personality traits and preferences.
      </p>
      <button className="bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
        <Link to="/test">Begin Test</Link>
      </button>
    </div>
  )
}

export default Landing