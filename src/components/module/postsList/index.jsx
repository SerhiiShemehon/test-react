import React from 'react';
import { Link  } from "react-router-dom";

import './style.scss'

export const PostsList = ({
	posts,
	comments
}) => {

	const numberPostComments = (data, commentsId) => {
		if (data) {
			let currentCommentsData = data.filter( item => +item.postId === +commentsId);
			return currentCommentsData.length;
		} else {
			return 'no data';
		}
	}

	const textSlice = (string) => {
		let sliced = string.slice( 0, 55 );
		if (sliced.length < string.length) {
			sliced += ' . . .';
		}
		return sliced;
	}

	return (
		<div className="posts-list">
			{posts && posts.map( (post, i) => <div key={i} className="post-item">
				<div className="post-holder">
					<h2><Link to={`/posts/post/${post.id}`}>{post.title}</Link></h2>
					<div className="text-holder">
						<p>{textSlice(post.body)}</p>
						<p>Comments: <strong>{numberPostComments(comments, post.id)}</strong></p>
					</div>
					<Link to={`/posts/post/${post.id}`} className="btn">Learn more</Link>
				</div>
			</div> )}
		</div>
	)
}