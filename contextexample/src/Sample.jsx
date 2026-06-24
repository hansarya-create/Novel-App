import {createContext, useContext, useState} from 'react';


export const codeContext = createContext();
export const feeContext = createContext();
export const admissionContext = createadmission();
export default function Sample() {
  
  const [fee, setFee] = useState(100000);
  return (
    
      <codeContext.Provider value = "KLHA">
        <feeContext.Provider value = {{fee, setFee}}>
          <admissionContext.Provider value = {confirm}>
      <College />
      </admissionContext.Provider>
      </feeContext.Provider>
      </codeContext.Provider>
      
    
  )
}

function College(){
  return(
    <Department />
  )
}
function Department(){
  return(
    <Student />
  )
}
  
function Student(){
  const code = useContext(codeContext);
  const {fee, setFee} = useContext(feeContext);
  const code= useContext(admissionContext)
  return(
    <div>
      <h1>College Code: {code}</h1>
      <h2>College Fee : {fee}</h2>
      <button onClick={() => setFee(fee - 5000)}>Discounted Fee</button>
    </div>
  )
}