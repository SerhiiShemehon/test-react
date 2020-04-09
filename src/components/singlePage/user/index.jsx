import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Loading, ErrorPage, PostsList, AlbumsList } from '../../'

import './style.scss'

const UserItemPage = ({
	isErrorUsers,
	isLoadingUsers,
	usersData,
	match,
	isErrorPosts,
	isLoadingPosts,
	postsData,
	commentsData,
	isErrorAlbums,
	isLoadingAlbums,
	albumsData,
	photosData
}) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const userItem = usersData.find((item)=> +item.id === +match.params.id);
	const currentPostsData = postsData.filter( post => +post.userId === +match.params.id);
	const currentAlbumsData = albumsData.filter( album => +album.userId === +match.params.id);

	return (
		<div className="container container-padding">
			{ isLoadingUsers
				? <Loading />
				: isErrorUsers
					? <ErrorPage />
					: userItem && <div className="user-page-item">

						<h1 className="decor">{userItem.username}</h1>
						<div className="text-holder">
							<h2>{userItem.name}</h2>
							<p>Email: <strong><a href={`mailto:${userItem.email}`}>{userItem.email}</a></strong></p>
							<p>Address: <strong>{userItem.address.street}, {userItem.address.suite}, {userItem.address.city}</strong></p>
							<p>Website: <strong>{userItem.website}</strong></p>
							<p>Company: <strong>{userItem.company.name}</strong>, {userItem.company.catchPhrase}, {userItem.company.bs}</p>
						</div>

						{
							isLoadingPosts
								? <Loading />
								: isErrorPosts
									? <div className="">No posts found</div>
									: currentPostsData && <div className="sectin-post">
										<h2 className="decor">Posts this author</h2>
										<PostsList posts={currentPostsData} comments={commentsData} />
									</div>
						}

						{
							isLoadingAlbums
								? <Loading />
								: isErrorAlbums
									? <div className="">No albums found</div>
									: currentAlbumsData && <div className="sectin-post">
										<h2 className="decor">Albums this author</h2>
										<AlbumsList albums={currentAlbumsData} photos={photosData} />
									</div>
						}
					</div>
			}
		</div>
	)
}

const mapStateToProps = (state) => ({
	isErrorUsers: state.usersReducer.isErrorUsers,
  isLoadingUsers: state.usersReducer.isLoadingUsers,
	usersData: state.usersReducer.usersData,
	isErrorPosts: state.postsReducer.isErrorPosts,
  isLoadingPosts: state.postsReducer.isLoadingPosts,
	postsData: state.postsReducer.postsData,
	commentsData: state.commentsReducer.commentsData,
	isErrorAlbums: state.albumsReducer.isErrorAlbums,
  isLoadingAlbums: state.albumsReducer.isLoadingAlbums,
	albumsData: state.albumsReducer.albumsData,
	photosData: state.photosReducer.photosData
});


export const UserItemPageWrapper = connect(
  mapStateToProps
)(UserItemPage);