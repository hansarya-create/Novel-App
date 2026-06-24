import React from 'react'
import Label from './Label'

export default function Courses({clist}) {
  const status = false;
  return (
    <div style={{backgroundColor:"lightpink",
                 border: "1px solid black",
                 borderRadius: "25px",
                 margin: "10px",
                 padding: "10px"
    }}>
        <h1 style={{textAlign:"center"}}>Courses Section</h1>
        {clist.map( course => ( 
          <h2>{course} : {status ? "Enrolled" : "Not-Enrolled"}</h2>
        ))}
        <Label data="Courses" name="term" roll='3'/>
    </div>
  )
}
