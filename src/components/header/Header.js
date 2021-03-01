import React from 'react';
import logo from './../../assets/images/icons/logo.svg';
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';
import NavToggle from './NavToggle';
import NavState from './NavState';

function  Header (){
	return (
		<NavState>
			<header className="o-header u-bg-primary">
				<div className="container">
					<div className="row justify-content-between align-items-center">
						<div className="col-12 col-md-2">
							<div className="d-flex justify-content-between align-items-center">	
								<Link to="/" className="c-nav__logo u-bg-secondary-400">
									<img src={logo} alt="logo"/>
								</Link>
								<NavToggle/>
							</div>
						</div>
						<div className="col-md-10">
							<NavBar/>
						</div>
					</div>
				</div>
			</header>
		</NavState>
	)
}

export default Header;