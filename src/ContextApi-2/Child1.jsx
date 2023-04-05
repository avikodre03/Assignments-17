import React, { useState } from 'react'
import { mycontext1 } from './Context1'
import Child2 from './Child2'
import './styleChildComp.css'

const Child1 = () => {
    const [data, setdata] = useState("")
  return (
    <>
    <div className='childComponent'>
        <h2>Child1 component</h2>
        <p style={{color:"red" }}>Data from Child4 : {data}</p>
        <hr />
        <mycontext1.Provider value={{setdata}}>

        <Child2/>
        </mycontext1.Provider>
    </div>
    </>
  )
}

export default Child1