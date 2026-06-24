import React from 'react'

export default function Label(props) {
  return (
    <div>
      <h4 style = {{
        border: "1px solid black",
        borderRadius: "25px",
        padding: "25px",
        backgroundColor: "white"
      }}>{props.data} Updated for {props.name}, {props.roll}</h4>
    </div>
  )
}