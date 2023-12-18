import React, { useState } from "react";
import TabelHead from "./TabelHead";
import AddButton from "./AddButton";
import axios from "axios";
let globalId = 4;


function SongInfoTable(SongData) {
  const [currentData, setCurrentData] = useState(SongData);

  const SongRow = currentData.map((songDataInfo) => {
    const {id, songname, band, url,isEditing} = songDataInfo;
    return (
     
        <SongRow 
        key={id} 
        id={id} 
       
        initialIsEditing={isEditing}
        deleteFunc={() => deleteRow(id)}
        SongData = {{band,songname,url}} 
        />
        
        
    
    );
  });


    const addRow = async () => {
      const responce = await axios.post("/addSong", {
        description: "song Description here",
      });
  
      setCurrentData([...currentData, responce.data]);}

      const deleteRow = async (itemID) => {
        const response = await axios.delete(`/deleteInvoice/${itemID}`);
        if (!response.data.error) {
          const filteredList = currentData.filter(
            (SongData) => SongData.id !== itemID
          );
    
          setCurrentData(filteredList);
        }
      };
      
    

  
  return (
    <div>
      <table>
        <thead>
          <TabelHead/>
        </thead>
      </table>
      <table>
        <tbody>{SongRow}</tbody>


        <tfoot>
          <AddButton addClick={addRow}/>
        </tfoot>
      </table>
    </div>
  );
}

export default SongInfoTable;
