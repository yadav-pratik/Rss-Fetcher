import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBarComp from "./components/NavBarComp";
import Body from "./components/Body";

const App = (props) => {
  return (
    <div className="App">
        <NavBarComp />
        <Body />
    </div>
  )
}

export default App;
