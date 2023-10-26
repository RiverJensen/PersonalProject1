import React, { useState } from 'react'
import ModeButtons from './ModeButtons'
import ButtonDelete from './ButtonDelete'
import SongRow from './SongRow'


const SongBox = ({initialSongData}) => {
  const [currentData, setCurrentData] = useState(initialSongData)

  const row = currentData.map((songItem)=>{
    const {id, songname, band, upvote, url} = songItem

      return (
        <SongRow
        key={id}
        id = {id}
        initialSongData = {{songname, band, upvote, url}}
        />
      )
  })
}


// const SongBox = () => {
//   return (
//     <div>
// <tr>Song name</tr>


//     <ModeButtons/>

// <img src='https://upload.wikimedia.org/wikipedia/en/d/de/Blink-182_-_Take_Off_Your_Pants_and_Jacket_cover.jpg'
//  width={100} height={100} />

//  <ButtonDelete/>
//     </div>
//   )
// }

export default SongBox