import React from 'react'
import Header from './components/header/Header'
import Projectcontainer  from './components/projectcontainer/Projectcontainer'
import Skillcontainer from './components/skillcontainer/Skillcontainer'
import Topcontainer from './components/Topcontainer/Topcontainer'
import "./App.css"
import Experience from './components/experience/Experience'

export const App = () => {
  return (
    <div>
        <Header/>
        <Topcontainer/>
        <Skillcontainer/>
        <Experience/>
        <Projectcontainer/>
        
    </div>
  )
}
export default App
