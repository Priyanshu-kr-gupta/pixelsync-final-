import React from 'react'
import "../Css/Results.css"
import Resultlink from './Resultlink.jsx'
export default function Results() {

    const fetchImages = () =>{

    }
    const fetchLinks = () =>{
        
    }
    return (

    <div className='resultPage'>
        <div className='resultTitle'>
             Showing results of "your search"   
        </div>
        <div className='ResultsContainer'>
            <div className='resultOptions'>
                <button onClick={fetchLinks}>links</button>
                <button onClick={fetchImages}>images</button>
            </div>
        </div>
         <div className='results'>
                <Resultlink title="sdgsd" description="sdgfs"/>
        </div>

    </div>
  )
}
