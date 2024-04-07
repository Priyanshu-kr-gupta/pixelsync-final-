import React from 'react'
import "../Css/Results.css"
import Resultlink from './Resultlink.jsx'
import {getJson} from 'serpapi'
export default function Results() {

    const fetchImages = () =>{

    }
    const fetchLinks = async () =>{
        const url = 'https://real-time-web-search.p.rapidapi.com/search?q=apple%20an%20online%20store&limit=100';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6485a298ccmsh50c49557d180251p144e64jsn5cd0c942dacd',
		'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
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
