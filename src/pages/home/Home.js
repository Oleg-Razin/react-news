import React from 'react';
import Posts from '../../components/post/Posts';
import Title from '../../components/title/Title';
import { ScrollTop } from '../../components/utilites/ScrollTop';

function  Home () {
	const title = 'news page'

	return(
		<section className="s-content">

			<Title title={title}/>
			<Posts />
			<ScrollTop/>
		</section>
	)
}

export default Home