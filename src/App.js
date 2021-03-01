import React from 'react';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';

import {
  Switch,
  Route
} from "react-router-dom";

function  App () {
  return (
    <div className="app">
      <Header />

      <main className="u-hero-padding u-bg-grad">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App;
