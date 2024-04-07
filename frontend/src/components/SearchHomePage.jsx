import React,{useState} from 'react'
import Avatar from './avatar' 
import NightMode from './NightMode'
import styled from 'styled-components';
import {useNavigate} from "react-router-dom"
import {Button} from "@nextui-org/react";
export const SearchHomePage = ({ dark, setDark }) => {
    const [dataQuery, setdataQuery] = useState('');
    const Navigate = useNavigate();
  return (
      <SearchStyle>
          <nav>
          <NightMode  dark={dark} setDark={setDark} />
          <Avatar />
          </nav>
          <h2>Pixelsync Search Engine</h2>
          <div className="searchBox">
              <form onSubmit={() => {Navigate(`/search/${dataQuery}`)}}>
                  <input type="text" placeholder='Search Anything : -}' value={dataQuery} onChange={(e) => { setdataQuery(e.target.value) }} />
                  <Button color="primary" variant="bordered"  onClick={() => {Navigate(`/search/${dataQuery}`)}} style={{position:"relative",
        bottom:"45%"}}>
        Search
      </Button> 
              </form>
          </div>
    </SearchStyle>
  )
}
const SearchStyle = styled.div`
h2{
    font-weight: 800;
    text-align: center;
    font-size: 70px;
    margin:50px;
}
nav{
    display: flex;
    justify-content: end;
    height: 120px;
    align-items:center;
    padding: 20px;
    gap: 3rem;
}
.searchBox{
    
    width: 100%;
    form{
        width: 100%;
        height:56vh;
        display: flex;
        justify-content: center;
        gap: 3rem;
        align-items: center;
    }
    input{
        border: 1px solid #333;
        width: 40%;
        padding: 10px 20px;
        border-radius: 10px;
        position:relative;
        bottom:45%;
    }
}
`