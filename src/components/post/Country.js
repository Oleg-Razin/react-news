import React from 'react';

const Country = ({handleChange, country}) =>{

	const categories = ['ua','us','gb'];

	return(
		<div className="c-country d-flex flex-wrap mt-3 mb-3">
			{categories.map( q => 
			<button value={q} key={q} onClick={handleChange} className={`btn btn--primary m-2 ${Country===q?"active":""}`}>{q}</button>
			)}
		</div>
	)
}

export default Country