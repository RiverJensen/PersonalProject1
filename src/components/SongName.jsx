import React from 'react'

const SongName = (value, isEditing,onValueChange) => {
  return isEditing?(
    <div>
        <input
        type='text'
        value={value}
        onChange={(e) => onValueChange(e.target.value)}/>

    </div>

  ):
  <td>
    {value}
  </td>
}
export default SongName