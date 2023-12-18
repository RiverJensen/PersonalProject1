
import { urlencoded } from 'express'
import React from 'react'

const Pictrue = (value, isEditing,onValueChange) => {
  return isEditing?(
    <div>
        <img
        type='text'
        src={value}
        onChange={(e) => onValueChange(e.target.value)}/>

    </div>

  ):
  <td>
    <img src= "value" alt="hahah" />
  </td>
}

