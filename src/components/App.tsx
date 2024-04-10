import React, { useState } from 'react'
import Wheel5 from '../pages/Wheel5'
import Wheel9 from '../pages/Wheel9'
import Wheel7 from '../pages/Wheel7'

export default function App() {
  const [selectedWheel, setSelectedWheel] = useState(5)
  function selectWheel5() {
    if (selectedWheel !== 5) {
      setSelectedWheel(5)
      const selected = document.querySelector('.selected')
      selected?.classList.remove('selected')
      const five = document.getElementById('five')
      five?.classList.add('selected')
    }
  }
  function selectWheel7() {
    if (selectedWheel !== 7) {
      setSelectedWheel(7)
      const selected = document.querySelector('.selected')
      selected?.classList.remove('selected')
      const seven = document.getElementById('seven')
      seven?.classList.add('selected')
    }
  }
  function selectWheel9() {
    if (selectedWheel !== 95) {
      setSelectedWheel(9)
      const selected = document.querySelector('.selected')
      selected?.classList.remove('selected')
      const nine = document.getElementById('nine')
      nine?.classList.add('selected')
    }
  }
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className='flex items-center justify-center'>
        <div id='five' onClick={selectWheel5} className='choice selected'>5</div>
        <div id='seven' onClick={selectWheel7} className='choice'>7</div>
        <div id='nine' onClick={selectWheel9} className='choice'>9</div>
      </div>
      <div>
        {selectedWheel !== 5 ? (
          selectedWheel !== 7 ? (
            <div>
              <Wheel9 />
            </div>
          ) : (
            <Wheel7 />
          )
        ) : (
          <Wheel5 />
        )}
      </div>
    </div>
  )
}
