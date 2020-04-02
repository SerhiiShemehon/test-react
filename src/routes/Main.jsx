import React from 'react';
import { Route, Switch } from "react-router-dom";

import { HomePage } from '../components'

export const Main = () => {
  return (
		<main className="main">
			{<Switch>
				<Route path="/" component={HomePage} exact />
			</Switch>}
		</main>
  );
}