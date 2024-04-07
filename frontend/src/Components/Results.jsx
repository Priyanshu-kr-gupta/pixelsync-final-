import React from 'react'
import "../Css/Results.css"
import Resultlink from './Resultlink.jsx'
export default function Results() {

    const fetchImages = async() =>{
        const data=await fetch("https://serpapi.com/search",{
            method: 'GET',
            q: "apple",
            engine: "google",
            api_key: "158225f2185db5a43bf8ff49b05ddacb63cec20af1d79ab4d50348d14a32aa35"
        })
        console.log(data)
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
