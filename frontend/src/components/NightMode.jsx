import React,{useState} from 'react'
import { FaMoon } from "react-icons/fa6";

const NightMode = ({dark, setDark}) => {
  return (
      <div>
          <FaMoon onClick={ ()=>{setDark(!dark)}} />
    </div>
  )
}

export default NightMode