import React from 'react'
import Label from './Label'

export default function Profile(props) {
  return (
    <div style = {{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor:"lightblue",
                    border: "1px solid blue",
                    borderRadius: "25px",
                    margin: "10px",
                    padding: "10px"
     }}>
      <div>
      <h1 style={{textAlign:"center"}}>Profile Section</h1>
      <h2>Name: {props.st.name} </h2>
      <h2>Id: {props.st.id}</h2>
      <h2>Email: {props.st.email} </h2>
      <h2>{props.st.status ?"Active" : "Inactive"}</h2>
      <Label />
      </div>
      <div>
        <img style = {{
          width: "100px",
          height: "300px",
          borderRadius: "50%",
          border: "2px solid black"
         }}
          src="./src/assets/sakura.jpg" alt="profile image" />
      </div>
    </div>
  )
}