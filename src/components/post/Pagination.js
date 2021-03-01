import React from 'react';


function Pagination ({pagiLen, handleChange, page}){
	const pages = [];
	for (let i = 1; i <= pagiLen; i++) {
		pages.push(i);
	}

	return(
		<div className="c-pagination mb-3 mt-3">
			<ul className="d-flex justify-content-center align-items-center flex-wrap">
				{pages.map( pages =>
					<li key={pages} className={`page-item ${pages === page ? "active":""}`}>
						<span onClick={handleChange} className="btn btn--primary m-1">
							{pages}
						</span>
					</li>
				)}
			</ul>
		</div> 
	)
}

export default Pagination