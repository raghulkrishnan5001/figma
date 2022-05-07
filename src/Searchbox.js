import React from 'react'

function Searchbox() {
  return (
    <div>
        <div className='email'>
                <input type="text" className='formcontrol w-100 p-1' placeholder='Search Query...'></input><button className="search btn btn-primary ">Search</button>
 </div>
    </div>
  )
}

export default Searchbox