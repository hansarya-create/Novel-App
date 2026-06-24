import {React,useState} from 'react'

export default function TestComponent() {
  const [marks, setMarks] = useState(0)
    const [result, setResult] = useState("")
    
    const calculate = () =>{
      setResult(marks>=50 ? "Pass" : "Fail")
    }
  return (
    <div>
      <h1>Student Result Calculator</h1>
      
      <input type = "number" placeholder="Enter marks..." onChange = {(e) =>setMarks(e.target.value)} />
      <button onClick={calculate}>Get Result</button>
      <p>Result: {result}</p>
      
    </div>
  )
}