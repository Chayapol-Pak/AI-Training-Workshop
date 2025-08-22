import React from 'react'
import './Hello.css'

const Hello = () => {
  return (
    <div className="hello-container">
      <h2 className="hello-title">Hello! 👋</h2>
      <p className="hello-message">
        Welcome to your React + Vite application!
      </p>
      <div className="hello-features">
        <span className="feature">⚡ Fast HMR</span>
        <span className="feature">📦 Optimized Build</span>
        <span className="feature">🔧 Easy Setup</span>
      </div>
    </div>
  )
}

export default Hello
