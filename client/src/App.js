import React, { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBarComp from "./components/NavBarComp";
import Body from "./components/Body";

const App = (props) => {
  useEffect(()=>{
    document.title = "RSS Fetcher - Latest News at one place"
  },[])
  return (
    <div className="App">
        <NavBarComp />
        <Body />
    </div>
  )
}

export default App;
