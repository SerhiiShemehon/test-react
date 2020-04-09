import React from 'react';

import './style.scss'

export const CommentsList = ({comments}) => {

	return (
		<div className="comments-list">
			{comments && comments.map( (comment, i) => <div key={i} className="comment-item">
				<div className="comment-holder">
					<h3>{comment.name}</h3>
					<div className="text">{comment.body}</div>
					<div className="author">
						<a href={`mailto:${comment.email}`}>{comment.email}</a>
					</div>
				</div>
			</div>)}
		</div>
	)
}