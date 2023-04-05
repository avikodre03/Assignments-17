import React, { useState } from 'react'
import B from './B'
import { mycontext } from './Context'
import'./styleComp.css'
const A = () => {
    const [state, setstate] = useState("")
    const [data, setdata] = useState("")
    return (
        <>
            <div className='component'>
                <h2>A component</h2>
                <input type="text" placeholder='Enter some text...'
                    onChange={(e) => {
                        setstate(e.target.value)
                    }} />
                <button onClick={() => {
                    setdata(state)
                }}>Send Data</button>
                <hr />
                <mycontext.Provider value={{ data }}>

                    <B />
                </mycontext.Provider>
            </div>
        </>
    )
}

export default A