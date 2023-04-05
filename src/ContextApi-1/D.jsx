import React, { useContext } from 'react'
import { mycontext } from './Context'
import'./styleComp.css'
const D = () => {
    const {data}=useContext(mycontext)
  return (
    <>
    <div className='component3'>
    <h2>D component</h2>
    <p style={{color:"red" }}>Data from A : {data}</p>
    <hr />
    </div>
    </>
  )
}

export default D