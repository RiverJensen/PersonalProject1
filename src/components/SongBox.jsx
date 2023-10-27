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
        initialISEditing = {isEditing}
        deleteFunc = {() => deleteRow(id)}
        />
      )
  })
}


const addSong = async () => {
  const responce = axios.post('/addSong', {description: 'Song description here'})
  
  setCurrentData([... currentData, responce.data])
}

export default SongBox



const deletSong = async (ItemID) => {
    const response = await axios.delete(`/deleteSong/${ItemID}`)
    if (! response.data.error){
      const filteredList = currentData.filter((songItem)=> songItem.id !== ItemID)

      setCurrentData(filteredList)
    }

    return(
      <Div>
        <table>
          <tbody>
            {row}
          </tbody>
        </table>
      </Div>
    )

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
