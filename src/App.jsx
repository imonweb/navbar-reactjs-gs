import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'

const App = () => {

  /*  Get the value theme from the browser */
  const current_theme = localStorage.getItem('current_theme');
  // const [theme,setTheme] = useState('light');
  const [theme,setTheme] = useState(current_theme ? current_theme : 'light');

  /*  toggle icon - update the theme from local storage */
  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  },[theme])



  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App