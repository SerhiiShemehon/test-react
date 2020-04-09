import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Loading, ErrorPage, CommentsList } from '../../'

import './style.scss'

const PostItemPage = ({
	match,
	isErrorPosts,
	isLoadingPosts,
	postsData,
	isErrorComments,
	isLoadingComments,
	commentsData
}) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const postItem = postsData.find((item)=> +item.id === +match.params.id);
	const currentCommentsData = commentsData.filter( comment => +comment.postId === +match.params.id);

	return (
		<div className="container container-padding">
			{ isLoadingPosts
				? <Loading />
				: isErrorPosts
					? <ErrorPage />
					: postItem && <div className="post-page-item">
						<h1 className="decor text-center decor-center">{postItem.title}</h1>
						<div className="text-holder" dangerouslySetInnerHTML={{__html: postItem.body}}/>

						{
							isLoadingComments
								? <Loading />
								: isErrorComments
									? <div className="">No posts found</div>
									: currentCommentsData && <div className="sectin-post">
										<h2 className="decor decor-center text-center">Comments this post</h2>
										<CommentsList comments={currentCommentsData} />
									</div>
						}
					</div>
			}
		</div>
	)
}

const mapStateToProps = (state) => ({
	isErrorPosts: state.postsReducer.isErrorPosts,
  isLoadingPosts: state.postsReducer.isLoadingPosts,
	postsData: state.postsReducer.postsData,
	isErrorComments: state.commentsReducer.isErrorComments,
  isLoadingComments: state.commentsReducer.isLoadingComments,
  commentsData: state.commentsReducer.commentsData
});


export const PostItemPageWrapper = connect(
  mapStateToProps
)(PostItemPage);