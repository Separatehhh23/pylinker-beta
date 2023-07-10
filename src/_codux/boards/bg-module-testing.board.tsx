import React from 'react'
import { createBoard } from '@wixc3/react-board'
import Background from 'c/Background'

export default createBoard({
  name: 'BG Module Testing',
  Board: () => (
    <div>
      <Background />
    </div>
  ),
})
