import { useState, useEffect } from 'react'
import './ThemeToggle.css'

const MODES = ['Light', 'Auto', 'Dark']

export default function ThemeToggle() {
  const [mode, setMode] = useState(
    () => localStorage.getItem('theme') || 'Auto'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode.toLowerCase())
    localStorage.setItem('theme', mode)
  }, [mode])

  return (
    <div className="theme-toggle">
      {MODES.map((m) => (
        <button
          key={m}
          className={`theme-btn ${mode === m ? 'active' : ''}`}
          onClick={() => setMode(m)}
        >
          {m}
        </button>
      ))}
    </div>
  )
}
