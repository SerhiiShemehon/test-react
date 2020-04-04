import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getUsers } from '../actions'

import { Header, Footer } from '../components';
import { Main } from './Main';

const Wrapper = (props) => {

	useEffect(() => {
		props.getUsers();
	},[]);

	return (
		<div className="layout-holder">
			<div id="wrapper">
				<Header />
				<Main />
			</div>
			<Footer />
		</div>
	)
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  getUsers
};

export const PageWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper);