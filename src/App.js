import React, { useState } from 'react';
import './App.css';
import { Route, HashRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import About from './components/About.jsx';
import Trafficking from './components/Trafficking.jsx'
import Shop from './components/shop/Shop.jsx'

function App() {
  const [profit, setProfit] = useState(0)
  return (
    <Router>
      <Route path='/' component={NavBar}/>
      <Route path='/about' component={About}/>
      <Route path='/shop' component={Shop}/>
      <Route path='/trafficking' render={()=> <Trafficking profit={profit} setProfit={setProfit}/>}/>
    </Router>
    
  );
}

export default App;
