import React from 'react'
import "./App.css";
import { BlogInput } from './Components/BlogInput';
import Bottom from './Components/Bottom';
import SideNavbar from './Components/SideNavbar';

const App = () => {
  return (
    <div className="App">
      {/* <BlogInput/> */}
      <Bottom/>
      <SideNavbar/>
    </div>
  )
}

export default App
