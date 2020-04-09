import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Loading, PostsList } from '../'

import { ErrorPage } from './'


const PostsPage = ({
	isErrorPosts,
	isLoadingPosts,
	postsData,
	commentsData
}) => {
	useEffect(() => {
    window.scrollTo(0, 0);
	}, []);

	return (
		<div className="container container-padding">
			<h1 className="text-center decor decor-center">Posts</h1>
			{ isLoadingPosts
				? <Loading />
				: isErrorPosts
					? <ErrorPage />
					: postsData && <PostsList posts={postsData} comments={commentsData}/>
			}
		</div>
	)
}

const mapStateToProps = (state) => ({
	isErrorPosts: state.postsReducer.isErrorPosts,
  isLoadingPosts: state.postsReducer.isLoadingPosts,
	postsData: state.postsReducer.postsData,
	commentsData: state.commentsReducer.commentsData
});


export const PostsPageWrapper = connect(
  mapStateToProps
)(PostsPage);