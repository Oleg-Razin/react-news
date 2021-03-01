import React, { useEffect, useState } from 'react';
import SinglePost from './singlePost';
import { getPostUrl } from "../../services/newsAPI";
import PostsCount from './PostsCount';
import Loader from '../utilites/Loader';
import Category from './Category';
import Pagination from './Pagination'
import Country from './Country';

function Posts () {
	
	const [news, setNews] = useState();
	const [category, setCategory] = useState('business');
	const [country, setCountry] = useState('us');
	const [pageSize, setPageSize] = useState(10);	
	const [page, setPage] = useState(1)
	const postCounter = [
		{
			value: 5,
			label: 5,
		},
		{
			value: 10,
			label: 10,
		},
		{
			value: 15,
			label: 15,
		},
		{
			value: 20,
			label: 20,
		}
	];

	const handleChangePageSize = ({target: {value} }) =>{
		const selectValue = +value;
		setPageSize(selectValue);
	}
	console.log(news);
	const paginationLength = news?Math.ceil(+news.totalResults / +pageSize):"";

	const handleChangePage = ({target})=>{
		const selectPage = +target.textContent;
		setPage(selectPage);
	}

	const hendleChangeCategory = ({target})=>{
		const selectCategory = target.value;
		setCategory(selectCategory);
		setPage(1);
	};

	const hendleChangeCountry = ({target})=>{
		const selectCountry = target.value;
		setCountry(selectCountry);
		setPage(1);
	};

	useEffect( () => {
		const pageId = page;
		const countryId = country;
		const categoryId = category;
		const pageSizeId = pageSize;

		getPostUrl(categoryId, countryId, pageSizeId, pageId)
		.then(data => setNews(data))
		.catch(error => error);
	}, [pageSize, page, category, country]);


	
	return 	(
		<div className="container">
			<div className="row flex-row-reverse justify-content-center justify-content-lg-between">
				<div className="col-lg-3">
					<PostsCount options={postCounter} handleChange={handleChangePageSize} value = {pageSize}/>
					<Category category={category} handleChange={hendleChangeCategory}/>
					<Country country={country} handleChange={hendleChangeCountry}/>
				</div>
				<div className="col-lg-9">
				{news ? 
					news.articles.map( article => <SinglePost key={article.url} article={article}/>):
					<Loader/> }
					<Pagination handleChange={handleChangePage} pagiLen={paginationLength} page={page}/>
				</div>
			
			</div>
		</div>
	)
	
}

export default Posts