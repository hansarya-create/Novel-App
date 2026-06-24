import React from 'react'
import Header from './Header.jsx'
import Courses from './Courses.jsx'
import Footer from './Footer.jsx'
import Attendance from './Attendance.jsx'
import Profile from './Profile.jsx'

export default function App() {
  return (
    <div>
    <h1>Welcome to the Student Dashboard </h1>
    <Header />
    <Profile />
    <Courses />
    <Attendance />
    <Footer />
    </div>
  )
}
