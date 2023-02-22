import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Questions from './pages/Questions'
import ResultScreen from './pages/Result'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/test" element={<Questions />} />
        <Route path="/result" element={<ResultScreen />} />
      </Routes>
    </div>
  )
}

export default App
