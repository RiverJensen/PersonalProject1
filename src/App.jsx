import { useState } from 'react'
import './App.css'
import ModeButtons from './components/ModeButtons'
import SongBox from './components/SongBox'
import SongRow from './components/SongRow'



function App ({initialSong}){
  return <SongBox initialSongData = {initialSong}/>
}

export default App
