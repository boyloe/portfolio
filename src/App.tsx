import React from 'react';
import { NavBar } from './components/Navigation/NavBar'; 
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage/HomePage'
// import { ResumePage } from './components/ResumePage/ResumePage';



function App() {
  return (
      <div className='bg-gray-200'>
        <NavBar />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/projects' component={() => {
              window.location.href = 'https://www.github.com/boyloe'
              return null
            }} />
            <Route exact path='/resume' component={() => {
              window.location.href = 'https://drive.google.com/file/d/1qdS2r653NMpgAMWgaeCXDqcoXTDLMYxn/view?usp=sharing'
              return null
            }} />
            <Route exact path='/contact' component={() => {
              window.location.href = 'mailto:boyloe@gmail.com'
              return null
            }} />
        </Switch>
    </div>
    );
}

export default App;
