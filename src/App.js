import React from 'react';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import {
  Switch,
  Route
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signIn } from './features/userSlice';

function  App () {
  const auth = localStorage.getItem('auth');
  const dispatch = useDispatch();
  if (auth){
    dispatch(signIn({
      userName: localStorage.getItem('user'),
			password: localStorage.getItem('password'),
			loginedIn: localStorage.getItem('auth'),
    }))
  }
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
