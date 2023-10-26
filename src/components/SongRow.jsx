import React, { useState } from 'react'
import SongBox from './SongBox'

export default function SongRow({initialSongData}){
  const [songname, setSongname] = useState(initialSongData.songname)
  const [band, setBand] = useState(initialSongData.band)
  const [url, setUrl] = useState(initialSongData.url)

  const changNormalMode = async() => {
      let bodyObj = {
        songname: songname,
        band: band,
        url: url
      }

     
      }

      return (

        Band
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