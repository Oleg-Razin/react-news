import React, {Component} from 'react';
import Posts from '../../components/post/Posts';
import Title from '../../components/title/Title';

function  Home () {
	const title = 'news page'

	return(
		<section className="s-content">

			<Title title={title}/>
			<Posts />
		</section>
	)
}

export default Home