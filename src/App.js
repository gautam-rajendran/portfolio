import React from 'react'
import Header from './components/header/Header'
import Projectcontainer  from './components/projectcontainer/Projectcontainer'
import Skillcontainer from './components/skillcontainer/Skillcontainer'
import Topcontainer from './components/Topcontainer/Topcontainer'
import "./App.css"
import Experience from './components/experience/Experience'
import Contact from './components/Contact/Contact'

export const App = () => {
  return (
    <div>
        <Header/>
        <Topcontainer/>
        <Skillcontainer/>
        <Experience/>
        <Projectcontainer/>
        <Contact/>
        
    </div>
  )
}
export default App
