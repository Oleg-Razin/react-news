import React from 'react';
import { Link } from 'react-router-dom';

export const Logout = ()=>{

	return(
		<Link to="/" onClick={localStorage.setItem('auth','')} className="btn btn--primary"><i className="fas fa-sign-out-alt"></i>log out</Link>
	)
}