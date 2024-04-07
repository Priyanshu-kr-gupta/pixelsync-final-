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
                <Resultlink title="sdgsd" description="sdgfsxcvhzxhf v zjxhcvhjzbxchjvbz gxbvh zbcxhbhv zcbx zbxcvbz x"/>
                <Resultlink title="sdgsd" description="sdgfs loremdfgsdfgsdhgfhus gd had"/>
                <Resultlink title="sdgsd" description="sdgfs dfgs dfg"/>
                <Resultlink title="sdgsd" description="sdgfs sdfgsd fgsdfgs dfg sdfg sf"/>
                <Resultlink title="sdgsd" description="sdgfs sdf gsdfg sdfg sfg"/>
        </div>

    </div>
  )
}
