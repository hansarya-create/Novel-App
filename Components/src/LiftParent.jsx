import LiftChild from './LiftChild'
import DisplayText from './DisplayText'
import React,    {   useState} from 'react'

export default function LiftParent() {
    const [text, setText] = useState("");
  return (
    <div>
      <LiftChild text={text} setText = {setText}   />
      <DisplayText text= {text}   />
    </div>
  )
}
