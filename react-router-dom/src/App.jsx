import React from 'react'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<div>About page</div>} />
        <Route path="/contact" element={<div>Contact page</div>} />
        <Route path="/" element={<div>Home page</div>} />
      </Routes>
    </div>
  )
}

export default App
