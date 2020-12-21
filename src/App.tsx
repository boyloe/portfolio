import React from 'react';
import { NavBar } from './components/Navigation/NavBar'; 
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage/HomePage'
import { ContactPage } from './components/ContactPage/ContactPage';
import { ResumePage } from './components/ResumePage/ResumePage';

function App() {
  return (
      <div className='bg-gray-300'>
        <NavBar />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/projects' component={() => {
              window.location.href = 'https://www.github.com/boyloe'
              return null
            }} />
            <Route exact path='/resume' component={ResumePage} />
            <Route exact path='/contact' component={ContactPage} />
        </Switch>
    </div>
    );
}

export default App;
