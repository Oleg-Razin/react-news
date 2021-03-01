import React,{useContext} from 'react';
import {NavContext} from './NavState';
import menuIcon from './../../assets/images/icons/menu.svg';
import closeIcon from './../../assets/images/icons/close.svg';

const NavToggle = () =>{
	const{ isMenuOpen, toggleMenuMode} = useContext(NavContext);

	const clickHandler = () => {
    toggleMenuMode();
	};
	
	return (
	<div onClick={clickHandler} className="c-nav__toggle d-md-none">
		{isMenuOpen ? 
		
			<img src={closeIcon} alt="close"/> :
			<img src={menuIcon} alt="menu"/> 
		}
	</div>
	)
}

export default NavToggle