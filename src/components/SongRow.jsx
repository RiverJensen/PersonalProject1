import React, { useState } from "react";

import axios from "axios";

import Pictrue from "./Pictrue";
import BandName from "./BandName";
import SongName from "./SongName";
import ModeButtons from "./ModeButton";

export default function SongRow({
  initialSongData,
  initialIsEditing,
  deleteFunc,
  id,
}) {
  const [songname, setSongname] = useState(initialSongData.songname);
  const [band, setBand] = useState(initialSongData.band);
  const [url, setUrl] = useState(initialSongData.url);

  const changNormalMode = async () => {
    let bodyObj = {
      songname: songname,
      band: band,
      url: url,
    };
    const response = await axios.put(`/editSong/${id}`, bodyObj);

    if (!response.data.error) {
      setEditMode(false);
    } else {
      alert(response.data.error);
    }
  };


  const changeEditMode = () => setEditMode(true)
    return (
      <tr>
        <ModeButtons
          isEditing={editMode}
        saveClick={changNormalMode}
        editClick={changeEditMode}
        funkyDelete={deleteFunc}
        />
        <BandName value={band} 
        isEditing={editMode}
        onValueChange={setBand}/>
        <Pictrue value={url}
        isEditing={editMode}
        onValueChange={setUrl} />

        <SongName value={songname}
        isEditing={editMode}
        onValueChange={setSongname} />
      </tr>
    );
  };

