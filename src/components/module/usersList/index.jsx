import React from 'react';
import { Link  } from "react-router-dom";

import './style.scss'

export const UsersList = ({
	users,
	posts
}) => {

	const numberPostUser = (data, userId) => {
		if (data) {
			let currentUserData = data.filter( item => +item.userId === +userId);
			return currentUserData.length;
		} else {
			return 'no data';
		}
	}

	return (
		<div className="users-list">
			{users.map( (user, i) => <div key={i} className="user-item">
				<div className="user-holder">
					<h2 className="nickname">
						<Link to={`users/user/${user.id}`}>{user.username}</Link>
					</h2>
					<h4 className="name">({user.name})</h4>
					<div className="text-holder">
						<p>Email: <strong><a href={`mailto:${user.email}`}>{user.email}</a></strong></p>
						<p>Address: <strong>{user.address.street}, {user.address.suite}, {user.address.city}</strong></p>
						<p>Posts: <strong>{numberPostUser(posts, user.id)}</strong></p>
					</div>
					<Link to={`/users/user/${user.id}`} className="btn">Learn more</Link>
				</div>
			</div>)}
		</div>
	)
}