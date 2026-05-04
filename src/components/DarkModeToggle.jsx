import React, { useState } from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  // TODO: Implement dark mode toggle logic


  const toggleDarkMode = () => {
    setDarkMode( prev => !prev)
  }

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}    
    </button>
  )
}

export default DarkModeToggle
