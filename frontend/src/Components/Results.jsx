import React,{useState} from 'react'
import "../Css/Results.css"
import Resultlink from './Resultlink.jsx'
import {getJson} from 'serpapi'
import { useParams } from 'react-router-dom'
export default function Results() {
    const {id}=useParams();
    console.log(id)
    const [res,setRes]=useState([]);
    const fetchImages = async() =>{

            
    }
    const fetchLinks = async () =>{
        const url = `https://real-time-web-search.p.rapidapi.com/search?q=${id}%20an%20online%20store&limit=100`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6485a298ccmsh50c49557d180251p144e64jsn5cd0c942dacd',
		'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    setRes(result.data)
    console.log(result.data)
} catch (error) {
	console.error(error);
}
    }
fetchLinks();

    return (

    <div className='resultPage'>
        <div className='resultTitle'>
             Showing results of "{id}"   
        </div>
        <div className='ResultsContainer'>
            <div className='resultOptions'>
                <button onClick={fetchLinks}>links</button>
                <button onClick={fetchImages}>images</button>
            </div>
        </div>
         <div className='results'>
              { res.map((e) => {
                return(
                <Resultlink title={e.title} description={e.snippet} url={e.url}/>
                )
              })}
        </div>
           
    </div>
  )
}
