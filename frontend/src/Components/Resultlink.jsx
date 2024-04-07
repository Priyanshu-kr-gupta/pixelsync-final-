import React from 'react'
import "../Css/Resultlink.css"
export default function Resultlink(props) {
  return (
    <a href='#' className='searchresults'>
        
        <div className='searchResultBox'>
            <div className='searchResultTitle'>
                {props.title}
            </div>
            <div className='searchResultdescription'>
                {props.description}
            </div>
        </div>
    </a>
  )
}
