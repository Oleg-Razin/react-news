import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../features/userSlice';


export const Logout = ()=>{

	const dispatch = useDispatch();

	const hendleClick = ()=>{
		localStorage.setItem('auth','');
		dispatch(signOut());
	}

	return(
		<Link to="/" onClick={hendleClick} className="btn btn--primary"><i className="fas fa-sign-out-alt"></i>log out</Link>
	)
}