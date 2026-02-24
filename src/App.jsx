import { useState } from 'react'

import './App.css'
import Homepage from './pages'
import Header from './components/layouts/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Homepage/>

    </>
  )
}

export default App
