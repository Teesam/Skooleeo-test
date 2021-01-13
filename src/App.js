import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/home/home';
import Signin from './components/sign-in/sign-in';

const App = () => {
  return (

    <BrowserRouter>

      <div className="App">
        
          <Route path = '/' exact strict component = { Home } />

          <Route path = '/signin' exact strict component = { Signin } />

      </div>

    </BrowserRouter>
  );
}

export default App;
