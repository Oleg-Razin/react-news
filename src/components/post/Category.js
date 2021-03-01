import React from 'react';

const Category = ({handleChange, category}) =>{

	const categories = ['business','entertainment','general','health','science','sports','technology'];

	return(
		<div className="c-category d-flex flex-wrap mt-3 mb-3">
			{categories.map( q => 
			<button value={q} key={q} onClick={handleChange} className={`btn btn--primary m-2 ${category===q?"active":""}`}>{q}</button>
			)}
		</div>
	)
}

export default Category