import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
	getUsers,
	getPosts,
	getСomments,
	getAlbums,
	getPhotos
} from '../actions'

import { Header, Footer } from '../components';
import { Main } from './Main';

const Wrapper = ({
	getUsers,
	getPosts,
	getСomments,
	getAlbums,
	getPhotos
}) => {

	useEffect(() => {
		getUsers();
		getPosts();
		getСomments();
		getAlbums();
		getPhotos();
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


const mapDispatchToProps = {
	getUsers,
	getPosts,
	getСomments,
	getAlbums,
	getPhotos
};

export const PageWrapper = connect(
  null,
  mapDispatchToProps
)(Wrapper);