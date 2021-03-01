import React from 'react';

const PostsCount = ({handleChange, options, value})=>{
	return (
		<select onChange={handleChange} value={value} className="c-select mb-3">
			{options.map(({ value, label })=>
			 <option key={value} value={value}>show {label}</option>
			)}
		</select>
	)
}

export default PostsCount