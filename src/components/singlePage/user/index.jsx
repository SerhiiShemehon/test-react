import React from 'react';
import { connect } from 'react-redux';

import { Loading } from '../../'


const UserItemPage = ({isErrorUsers, isLoadingUsers, usersData, match}) => {

	const userItem = usersData.find((item)=> item.id == match.params.id);

	return (
		<div className="container container-padding">
			{ isLoadingUsers
				? <Loading />
				: isErrorUsers
					? <div className="">404</div>
					: userItem && <div className="user-page-item">
						<h1 className="decor">{userItem.username}</h1>
						<div className="text-holder">
							<h2>{userItem.name}</h2>
							<p>Email: <strong><a href={`mailto:${userItem.email}`}>{userItem.email}</a></strong></p>
							<p>Address: <strong>{userItem.address.street}, {userItem.address.suite}, {userItem.address.city}</strong></p>
							<p>Website: <strong>{userItem.website}</strong></p>
							<p>Company: <strong>{userItem.company.name}</strong>, {userItem.company.catchPhrase}, {userItem.company.bs}</p>
						</div>
					</div>
			}
		</div>
	)
}

const mapStateToProps = (state) => ({
	isErrorUsers: state.usersReducer.isErrorUsers,
  isLoadingUsers: state.usersReducer.isLoadingUsers,
  usersData: state.usersReducer.usersData
});


export const UserItemPageWrapper = connect(
  mapStateToProps
)(UserItemPage);