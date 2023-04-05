import React, { useContext } from 'react'
import { mycontext1 } from './Context1'
import { useState } from 'react'

const Child4 = () => {
    const { setdata } = useContext(mycontext1)
    const [inputValue, setinputValue] = useState("")
    return (
        <div className='childComponent4'>
            <h2>Child4 component</h2>
            <input type="text" placeholder='Enter some text..'
                onChange={(e) => {
                    setinputValue(e.target.value)
                }} />
            <button
                onClick={() => {
                    setdata(inputValue)
                }}>Send Data</button>
            <hr />
        </div>
    )
}

export default Child4