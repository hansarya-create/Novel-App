import React from 'react'
import Profile from './Profile'
import Courses from './Courses'
import Attendance from './Attendance'

export default function App() {
  const student = {
    name:"T.Hansarya",
    id:2510030342,
    email:"thippani.hansarya@klh.edu.in",
    status: false
  }
  const courses = ["FEDF💻","DSA 📚","AI🤖","MDS🧮","JAPANESS🍥"];
  const attendance = {
    fedf : 96,
    dsa: 95,
    ai:90,
    mds:88,
    japaness: 94
  }
  return (
    <div>
      <h2>Student Dashboard</h2>
      <Profile st={student} />
      <Courses clist = {courses} />
      <Attendance alist = {attendance} />
    </div>
  )
}
