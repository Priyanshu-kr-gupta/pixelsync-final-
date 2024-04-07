import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import { SearchHomePage } from './components/SearchHomePage';
import Results from "./components/Results"
import styled from "styled-components"
function App() {
   
  const [dark, setDark] = useState(0);
  return (
    <AppStyle>
      <div className= {dark? "darkMode" : "dayMode"} >
          <Routes>
          <Route path="/" element={<SearchHomePage dark={dark} setDark={setDark} />}></Route>
          <Route path="/search/:id" element={<Results/>}></Route>
          </Routes>
        </div>
    </AppStyle>
  )
}
const AppStyle = styled.div`

.darkMode{
  height: 100vh;
  *{
    color: white;
    background: black;
  }
}
.dayMode{
  height: 100vh;
  *{
    color: black;
    background: white;
  }
}
`
export default App
