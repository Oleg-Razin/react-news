import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import './ScrollTop.scss'

export const ScrollTop = () =>{
	const handleClick = ()=>{
		scroll.scrollToTop();	
	}
	return (
		<div onClick={handleClick} className="c-scroll btn btn--primary">
			TOP
		</div>
	)
}