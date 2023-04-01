import React from 'react'
import '../styles/board.css'
export default function Board() {
  return (
    <div className='board'>
        <h1 className='leaderboard'>LeaderBoard</h1>
        <div className='duration'>
            <button data-id="7">7 Days</button>
        </div>
    </div>
  )
}
