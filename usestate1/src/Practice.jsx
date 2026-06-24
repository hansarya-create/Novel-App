import React, { useState } from 'react'

export default function Practice() {
    const [name, setName] = useState("Guest");
    const [email, SetEmail] = useState("");
    const [rollNum, SetrollNum] = useState("");
     const [mobileNo, setMobileNo] = useState("Number");
     const changeNumber = () => {
        setMobileNo("9030496984");
    }
     const handlerollNum = (e) => {
        SetrollNum(e.target.value);
    }
    const handleEmail = (e) => {
        SetEmail(e.target.value);
    }
    const changeName = () => {
        setName("Hansarya");
    }
    return (
        <div>
            <h1>Name: {name}</h1>
            <button onClick={changeName}>Change Name</button>

            <h1>Email : {email}</h1>
            <input type='text' placeholder="enter your email"
                onChange={handleEmail} />

            <h1>Roll Number : {rollNum}</h1>
            <input type='text' placeholder="enter your rollNum"
                onChange={handlerollNum} />

                 <h1>Mobileno: {mobileNo}</h1>
            <button onClick={changeNumber}>Change Number</button>

        </div>
    )
}