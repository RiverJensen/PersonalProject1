import React, { useState } from 'react'
import SongBox from './SongBox'
import axios from 'axios'
import ModeButtons from './ModeButtons'
import Pictrue from './Pictrue'
import BandName from './BandName'


export default function SongRow({initialSongData, initialIsEditing, deletFunc,id,}){
  const [songname, setSongname] = useState(initialSongData.songname)
  const [band, setBand] = useState(initialSongData.band)
  const [url, setUrl] = useState(initialSongData.url)

  const changNormalMode = async() => {
      let bodyObj = {
        songname: songname,
        band: band,
        url: url
      }

      const responce = await axios.put(`editSong/${id}`,bodyObj)

        if (!responce.data.error){
          setEditMode(false)
        } else {alert(responce.data.error)}

      }

      const changEditMode = () => setEditMode(true)

      return (

        <div>
          <tr>
            <Picture/>







          </tr>
        </div>
      )


        
      return (
        <tr>
           <ModeButtons
            isEditing={editMode}
            saveClick={changNormalMode}
            editClick= {changeEditMode}
            funkyDelete = {deleteFunc}
       />
       <BandName
            isEditing={editMode}
            value={description}
            onValueChange= {setDescription}
       />
       <Pictrue
            isEditing={editMode}
            value={rate}
            onValueChange={setRate}
         />
       
        
        </tr>
      )




  }








// const SongRow = () => {
//   return (
//      <div>
//         <tr>
        
//             <SongBox/>
            
//         </tr>
//     </div>
//   )
// }

// export default SongRow