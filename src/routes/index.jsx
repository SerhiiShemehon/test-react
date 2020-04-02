import React from 'react';
import { connect } from 'react-redux';

import { Header, Footer } from '../components';
import { Main } from './Main';

const Wrapper = () => {
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
  
};

export const PageWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper);