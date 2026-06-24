import React, { useState } from 'react'

export default function Calculator() {
    const [val1, setVal1] = useState();
    const [val2, setVal2] = useState();
    const [result, setResult] = useState();
    
    const add = () => {
        setResult(Number(val1) + Number(val2));
    }
    const sub = () => {
        setResult(Number(val1) - Number(val2));
    }
    const mul = () => {
        setResult(Number(val1) * Number(val2));
    }
    const div = () => {
        setResult(Number(val1) / Number(val2));
    }
    const quo = () => {
        setResult(Number(val1) % Number(val2));
    }

    return (
        <div>
            <h1 className='text-xl font-bold bg-blue-600 p-3 m-3'>Calculator</h1>
            <div className='m-4 p-2'>
                <label className='p-2 font-bold'>Enter First value:</label>
                <input type='number'
                    placeholder='Enter value'
                    value={val1}
                    onChange={(e) => setVal1(e.target.value)} />
            </div>
            <div className='m-4 p-2'>
                <label className='p-2 font-bold'>Enter Second value:</label>
                <input type='number'
                    placeholder='Enter value'
                    value={val2}
                    onChange={(e) => setVal2(e.target.value)} />
            </div>
            <div className='flex-bold flex flex-cols gap-10 justify-center cursor-pointer'>
                <button onClick={add} className='bg-blue-400 w-10 rounded-md p-3'>+</button>
                <button onClick={sub} className='bg-red-400 w-10 rounded-md p-3'>-</button>
                <button onClick={div} className='bg-yellow-400 w-10 rounded-md p-3'>/</button>
                <button onClick={mul} className='bg-pink-400 w-10 rounded-md p-3'>*</button>
                <button onClick={quo} className='bg-blue-400 w-10 rounded-md p-3'>%</button>
            </div>
            <div className='p-5 font-bold'>
                <label>Result: {result} </label>
            </div>
        </div>
    )
}