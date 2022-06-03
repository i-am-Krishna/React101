import React from 'react'
import { Box } from './Box'
import './Board.css'

export const Board = ({board,onClick}) => {
  return (
    <div className='board'>
        {board.map((value,ind)=>(

    <Box value={value} onClick={()=> value=== null && onClick(ind)}/>
        ))}

    </div>
  )
}
