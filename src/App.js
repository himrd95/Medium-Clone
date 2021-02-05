import React from 'react'
import "./App.css";
import Bookmarks from './Components/Finalbook';
// import { BlogInput } from './Components/BlogInput';
// import Bottom from './Components/Bottom';
// import SideNavbar from './Components/SideNavbar';
import { Routes } from './Routes/Routes'

const App = () => {
  return (
    <div className="App">
      {/* <BlogInput/> */}
      {/* <Bottom/>
      <SideNavbar/> */}
      {/* <Bookmarks/> */}
      <Routes />

    </div>
  )
}

export default App
