import React from 'react';

import './style.scss'

export const UsersList = ({users}) => {
	return (
		<div className="users-list">
			{users.map( (user, i) => <div key={i} className="user-item">
				<div className="user-holder">
					<h2 className="nickname">
						<a href={`users/user/${user.id}`}>{user.username}</a>
					</h2>
					<h4 className="name">({user.name})</h4>
					<div className="text-holder">
						<p>Email: <strong><a href={`mailto:${user.email}`}>{user.email}</a></strong></p>
						<p>Address: <strong>{user.address.street}, {user.address.suite}, {user.address.city}</strong></p>
						<p>Website: <strong>{user.website}</strong></p>
						<p>Company: <strong>{user.company.name}</strong>, {user.company.catchPhrase}, {user.company.bs}</p>
					</div>
					<a href={`users/user/${user.id}`} className="btn">Learn more</a>
				</div>
			</div>)}
		</div>
	)
}