import React from "react";

const ModeButtons = ( {isEditing, saveClick, editClick, funkyDelete, rateUp, rateDown}) => {
  return  isEditing (
    <div>
      <tr>
        <td>
          <button> + </button>
          <button> - </button>
        </td>

        

        <td>
          <button>Delete</button>
        </td>
      </tr>


      <td>
        <button onClick={saveClick}>Save</button>


    </td>
  ) : (
    <td>
        <button onClick={funkyDelete}>Delete</button>
        <button onClick={editClick}>Edit</button>
        <button onClick={rateUp}>+</button>
        <button onClick={rateDown}></button>


    </td>
      
    </div>
  );
};

export default ModeButtons;
