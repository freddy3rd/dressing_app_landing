import { useState } from 'react'

import './App.css'
import Homepage from './pages'
import Header from './components/layouts/Header'
import SplashScreen from './components/ui/SplashScreen'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SplashScreen/> */}
      <Header/>
      <Homepage/>

    </>
  )
}

export default App
