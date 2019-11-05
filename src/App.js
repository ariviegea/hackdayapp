import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Apartments from './components/Apartments';
import About from './components/About';
import Admin from './components/Admin';
import './css/Style.css';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
        <Nav className='nav'/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/apartments' component={Apartments}/>
          <Route path='/about' component={About}/>
          <Route path='/admin' component={Admin}/>
        </Switch>
        <Footer/>
      </div>
  );
}

export default App;
