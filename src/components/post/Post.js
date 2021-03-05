import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import imgDefault from "../../assets/images/news1.jpg";
import { getPost } from '../../features/postSlice';
const Post = ({article}) =>{

	const dispatch = useDispatch();

	const getPostInfo = ()=>{
		dispatch(getPost({article}));
		localStorage.setItem('post', JSON.stringify(article));
		console.log(article);
	}

	return (

	<div className="c-post u-bg-secondary-400">
		<div className="c-post__header">
			<div className="c-post__heading d-flex flex-column justify-content-around">
				<h2 className="c-post__title u-white">{article.title}</h2>
				<div className="c-post__info">
					<span className="c-post__time u-white"><i className="fas fa-clock"></i>{new Date(article.publishedAt).toLocaleDateString()}</span>
					<span className="c-post__author u-white">{article.author}</span>
				</div> 
			</div>
			<img src={article.urlToImage ? article.urlToImage : imgDefault} alt="news1" />
		</div>
		<div className="c-post__body">
			<p className="c-post__descrimtion u-white">{article.description}</p>
			<div className="c-post__link-wrap">
				<Link to="/singlePost" onClick={getPostInfo} className="btn-link">learn more <i className="fas fa-arrow-circle-right"></i></Link>
			</div> 
		</div>
	</div>
	)
	};

export default Post