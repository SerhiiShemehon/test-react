import React from 'react';
import { connect } from 'react-redux';

import { Loading, UsersList } from '../'


const UsersPage = ({isErrorUsers, isLoadingUsers, usersData}) => {

	return (
		<div className="container container-padding">
			<h1 className="text-center decor decor-center">Users</h1>
			{ isLoadingUsers
				? <Loading />
				: isErrorUsers
					? <div className="">404</div>
					: usersData && <UsersList users={usersData} />
			}
		</div>
	)
}

const mapStateToProps = (state) => ({
	isErrorUsers: state.usersReducer.isErrorUsers,
  isLoadingUsers: state.usersReducer.isLoadingUsers,
  usersData: state.usersReducer.usersData
});


export const UsersPageWrapper = connect(
  mapStateToProps
)(UsersPage);