import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModeButtons from './cpmponents/ModeButtons'
import SongBox from './cpmponents/SongBox'
import SongRow from './cpmponents/SongRow'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SongRow/>
    </>
  )
}

export default App
