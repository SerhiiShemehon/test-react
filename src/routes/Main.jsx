import React from 'react';
import { Route, Switch } from "react-router-dom";

import { HomePage, UsersPageWrapper, UserItemPageWrapper } from '../components'

export const Main = () => {
  return (
		<main className="main">
			{<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/users" component={UsersPageWrapper} />
				<Route exact path="/users/user/:id" component={UserItemPageWrapper} />
			</Switch>}
		</main>
  );
}