

import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import SongName from './components/SongName'
import ModeButtons from './components/ModeButtons'

function App (){

  const [initialData, setInitialData] = useState([])

  const getInitialData = async () => {
    // make an axios call to my server to get SONG_DATA
    const response = await axios.get("/song")

    setInitialData(response.data)
  }

  const songs = initialData.map((song) => {
    return (
      <SongName songName={song.songname} />
    )
  })

  useEffect(() => {
    // useEffect runs on every render of the component, unless specified with a second argument
    // useEffect(callback-to-run, [run condition])
    // if run condition is [], useEffect will ONLY run on the INITIAL render of component
    getInitialData()
  }, [])

  // return <SongBox initialSongData = {initialSong}/>
  return (
    <div>
      
      {songs}
    </div>
  )
}

export default App
