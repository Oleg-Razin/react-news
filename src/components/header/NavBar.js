import React,{useContext} from 'react';
import {NavContext} from './NavState';

import { Link } from 'react-router-dom';
import { Logout } from './Logout';


export const NavBar = () =>{
	const{ isMenuOpen} = useContext(NavContext);
	const auth = localStorage.getItem('auth');
	console.log(auth);
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
					<Link to="/profile" className="c-nav__link u-white">profile</Link>
				</li>
				{auth ?
					<li className="c-nav__item">
						<Logout/>
					</li> :
					<li className="c-nav__item">
					<Link to="/login" className="btn btn--primary"><i className="fas fa-sign-in-alt"></i>log in</Link>
					</li>
				}
			</ul>
		</nav>
	)
}