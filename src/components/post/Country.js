import React from 'react';

const Country = ({handleChange, country}) =>{

	const Country = ['ua','us','gb'];

	return(
		<div className="c-country d-flex flex-wrap mt-3 mb-3">
			{Country.map( q => 
			<button value={q} key={q} onClick={handleChange} className={`btn btn--primary m-2 ${country===q?"active":""}`}>{q}</button>
			)}
		</div>
	)
}

export default Country