import React from 'react';
import { NavBar } from './components/Navigation/NavBar';
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage/HomePage'


function App() {
  return (
      <div className="bg-gray-800">
        <NavBar />
        <Switch>
            <Route exact path='/' component={HomePage} />
            {/* <Route exact path='/projects' component={} />
            <Route exact path='/resume' component={} />
            <Route exact path='/contact' component={} /> */}
        </Switch>
    </div>
    );
}

export default App;
