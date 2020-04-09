import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Loading, UsersList } from '../'

import { ErrorPage } from './'


const UsersPage = ({
	isErrorUsers,
	isLoadingUsers,
	usersData,
	postsData
}) => {
	useEffect(() => {
    window.scrollTo(0, 0);
	}, []);

	return (
		<div className="container container-padding">
			<h1 className="text-center decor decor-center">Users</h1>
			{ isLoadingUsers
				? <Loading />
				: isErrorUsers
					? <ErrorPage />
					: usersData && <UsersList users={usersData}  posts={postsData}/>
			}
		</div>
	)
}

const mapStateToProps = (state) => ({
	isErrorUsers: state.usersReducer.isErrorUsers,
  isLoadingUsers: state.usersReducer.isLoadingUsers,
	usersData: state.usersReducer.usersData,
	postsData: state.postsReducer.postsData
});


export const UsersPageWrapper = connect(
  mapStateToProps
)(UsersPage);