import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { selectUser } from '../../features/userSlice';
import './user.scss';

const Profile =()=> {
	const user = useSelector(selectUser);

	if(!user.loginedIn){
		return <Redirect to="/login"></Redirect>
	}
	return(
		<div className="container">
			<div className="row justify-content-center align-items-center">
				<div className="col-md-10">
					<div className="c-user u-bg-white d-flex align-items-center justify-content-center justify-content-md-between flex-wrap">
						<div className="c-user__icon u-bg-yellow">
							<span className="fas fa-user-astronaut"></span>
						</div>
						<h2 className="c-user__name u-primary">
							Username : <strong>{user.userName}</strong>
						</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile