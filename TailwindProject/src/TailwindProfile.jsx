import React from 'react'

export default function TailwindProfile() {
  return (
    <div className="max-w-sm mx-auto mt-10 rounded-2xl overflow-hidden bg-purple-500 shadow-xl font-sans">
        <div>
            <img src="./src/assets/pfp.jpg" alt="profile"
            className="w-full h-[250px] object-contain" />
        </div> 

        <div className= "p-5 text-left">
            <h1 className=" px-3 py-1 rounded-lg text-sm font-semibold text-black bg-blue-400 text-5xl font-bold text-white-800w">Team Workoholics</h1>
            <h2 className=" px-3 py-1 rounded-lg text-sm font-semibold text-black bg-blue-400text-red-600 mb-3">Junior Developers</h2>
            <h2 className=" px-3 py-1 rounded-lg text-sm font-semibold text-black bg-blue-400text-sm text-green-700 leading-relaxed">Educators, Research Scholar</h2>

        </div>
        <div className='flex flex-wrap mx-4 gap-2 mb-10'>
            <span className='px-3 py-1 rounded-lg text-sm font-semibold text-black bg-orange-400'> HTML+CSS</span>
            <span className='px-3 py-1 rounded-lg text-sm font-semibold  text-black bg-green-400'>JAVASCRIPT</span>
            <span className='px-3 py-1 rounded-lg text-sm font-semibold  text-black bg-yellow-400'>WEB DESIGN</span>
            <span className='px-3 py-1 rounded-lg text-sm font-semibold  text-black bg-red-400'>REACT</span>
            <span className='px-3 py-1 rounded-lg text-sm font-semibold  text-black bg-purple-400'>LOGO DESIGN</span>
        </div>
    </div>
  )
}
