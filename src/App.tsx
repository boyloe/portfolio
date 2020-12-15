import React, { useEffect } from 'react';
import { NavBar } from './components/Navigation/NavBar'; 
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage/HomePage'
import { ProjectPage } from './components/ProjectPage/ProjectPage';
import { ContactPage } from './components/ContactPage/ContactPage';
// import { ResumePage } from './components/ResumePage/ResumePage';

const baseURL = `http://www.localhost:4000`
function App() {
  // useEffect(() => {
  //   fetch(`${baseURL}`)
  //     .then(response => response.json())
  //     .then(console.log)
  // }, [])
  return (
      <div className='bg-gray-300'>
        <NavBar />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/projects' component={ProjectPage} />
            <Route exact path='/resume' component={() => {
              window.location.href = 'https://drive.google.com/file/d/1qdS2r653NMpgAMWgaeCXDqcoXTDLMYxn/view?usp=sharing'
              return null
            }} />
            <Route exact path='/contact' component={ContactPage} />
        </Switch>
    </div>
    );
}

export default App;
