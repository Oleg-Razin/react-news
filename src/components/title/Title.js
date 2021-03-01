import React from 'react';
import './title.scss';

const Title=({title})=>{

	return(
		<div className="container">
			<div className="row text-center">
				<div className="col-12">
					<h1 className="c-title">{title}</h1>
				</div>
			</div>
		</div>
	)
}

export default Title