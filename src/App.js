import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Provider } from "mobx-react";

import Stores from './Stores';

import User from './User';
import Home from './Home';
import Header from './Header'
import Category from './Category'

function App() {
  return (
      <Provider stores={Stores}>
        <BrowserRouter>
          <header className="App-header">
              <Header/>
          </header>
          <section className='app-body'>
            <Route exact path='/' component={Home}/>
            <Route path='/category/:id' component={Category}/>
            <Route path='/user/:command?/:id?' component={User}/>
          </section>
          <footer>

          </footer>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
