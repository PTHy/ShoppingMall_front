import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Provider } from "mobx-react";

import Stores from './Stores';

import User from './User';
import Home from './Home';

function App() {
  return (
      <Provider stores={Stores}>
        <BrowserRouter>
          <header className="App-header">

          </header>
          <section className='app-body'>
            <Route exact path='/' component={Home}/>
            <Route path='/user/:command?/:id?' component={User}/>
          </section>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
