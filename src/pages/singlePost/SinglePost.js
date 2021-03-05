import React from 'react';
import { useSelector } from 'react-redux';
import { selectPost } from '../../features/postSlice';
import imgDefault from "../../assets/images/news1.jpg";
import './singlePost.scss';

const SinplePost = () => {

	const post = useSelector(selectPost);

	return (
		<div className="s-single-post">
			<div className="s-single-post__img-wrap">
				<img className="s-single-post__img" src={post.urlToImage ? post.urlToImage : imgDefault} alt={post.source.id}/>
			</div>
			<div className="container">
				<div className="row justify-content-center align-items-center">
					<div className="col-md-10">
						<div className="s-single-post__wrap u-bg-white">	
							<h1 className="c-post__title">{post.title}</h1>
							<div className="c-post__info text-center">
								<span className="c-post__time "><i className="fas fa-clock"></i>{new Date(post.publishedAt).toLocaleDateString()}</span>
								<span className="c-post__time "><i className="fas fa-user-tag"></i>
								{post.author ? post.author: 'No author'}
								</span>
								<span className="c-post__time"><i className="fas fa-tags"></i>{post.source.name}</span>
							</div> 
							<div className="s-single-post__content">
								{post.description}
							</div>
							<div className="c-post__link-wrap">
							<a to="/singlePost" href={post.url} className="btn-link">learn more <i className="fas fa-arrow-circle-right"></i></a>
							</div> 
						</div> 
					</div>
				</div>
			</div>
		</div>
	)
}

export default SinplePost