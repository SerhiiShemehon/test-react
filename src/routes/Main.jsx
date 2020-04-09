import React from 'react';
import { Route, Switch } from "react-router-dom";

import {
	HomePage,
	UsersPageWrapper,
	UserItemPageWrapper,
	PostsPageWrapper,
	PostItemPageWrapper,
	AlbumsPageWrapper,
	AlbumItemPageWrapper
} from '../components'

export const Main = () => {
  return (
		<main className="main">
			{<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/users" component={UsersPageWrapper} />
				<Route exact path="/users/user/:id" component={UserItemPageWrapper} />
				<Route exact path="/posts" component={PostsPageWrapper} />
				<Route exact path="/posts/post/:id" component={PostItemPageWrapper} />
				<Route exact path="/albums" component={AlbumsPageWrapper} />
				<Route exact path="/albums/album/:id" component={AlbumItemPageWrapper} />
			</Switch>}
		</main>
  );
}