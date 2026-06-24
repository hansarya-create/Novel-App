import React from 'react'
import Label from './Label'

export default function Attendance({alist}) {
  return (
    <div style={{backgroundColor:"lightblue",
                 border: "1px solid black",
                 borderRadius: "25px",
                 margin: "10px",
                 padding: "10px"
    }}>
        <h1 style={{textAlign:"center"}}></h1>
        <h2>FEDF : {alist.fedf}%  - {alist.fedf >=75 ? "Promoted" : "Detained"}</h2>
        <h2>DSA : {alist.dsa}% - {alist.dsa >=75 ? "Promoted" : "Detained"}</h2>
        <h2>AI : {alist.ai}% - {alist.ai>=75 ? "Promoted" : "Detained"}</h2>
        <h2>MDS : {alist.mds}% - {alist.mds >=75 ? "Promoted" : "Detained"}</h2>
        <h2>JAPANESS : {alist.japaness}% - {alist.j >=75 ? "Promoted" : "Detained"}</h2>
        <Label data="Attendance" name="april" roll='2026' />
      
    </div>
  )
}
