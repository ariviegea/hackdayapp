import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Apartments from './components/Apartments';
import About from './components/About';
import './css/Style.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Nav className='nav'/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/apartments' component={Apartments}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
  );
}

export default App;
