import React,{useContext} from 'react';
import {NavContext} from './NavState';

import { Link, Redirect } from 'react-router-dom';
import { Logout } from './Logout';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';


export const NavBar = () =>{
	const{ isMenuOpen} = useContext(NavContext);
	const user = useSelector(selectUser);
	return(		
		<nav className={`c-nav ${isMenuOpen &&  window.innerWidth<768 ? 'active' : ''}`}>	
			<ul className="
				c-nav__wrap 
				d-flex 
				flex-column
				flex-md-row
				justify-content-end 
				align-items-end
				align-items-md-center
				">
				<li className="c-nav__item">
					<Link to="/" className="c-nav__link u-white">home</Link>
				</li>
				<li className="c-nav__item">
					<Link to="/profile" className="c-nav__link u-white">
						profile
					</Link>
				</li>
				<li className="c-nav__item">
					{user.loginedIn ?
						<Logout/>
					:<Link to="/login" className="btn btn--primary"><i className="fas fa-sign-in-alt"></i>log in</Link>}
				</li>
			</ul>
		</nav>
	)
}