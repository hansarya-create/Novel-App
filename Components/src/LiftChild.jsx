import React from 'react'

export default function LiftChild({text,setText}) {

  return (
    <div>
        <input value={text} onChange = {(e) =>setText(e.target.value)}  />
        
    </div>
  )
}
