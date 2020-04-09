import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Loading, AlbumsList } from '../'

import { ErrorPage } from './'


const AlbumsPage = ({
	isErrorAlbums,
	isLoadingAlbums,
	albumsData,
	photosData
}) => {
	useEffect(() => {
    window.scrollTo(0, 0);
	}, []);

	return (
		<div className="container container-padding">
			<h1 className="text-center decor decor-center">Albums</h1>
			{ isLoadingAlbums
				? <Loading />
				: isErrorAlbums
					? <ErrorPage />
					: albumsData && <AlbumsList albums={albumsData} photos={photosData} />
			}
		</div>
	)
}

const mapStateToProps = (state) => ({
	isErrorAlbums: state.albumsReducer.isErrorAlbums,
  isLoadingAlbums: state.albumsReducer.isLoadingAlbums,
	albumsData: state.albumsReducer.albumsData,
	photosData: state.photosReducer.photosData
});


export const AlbumsPageWrapper = connect(
  mapStateToProps
)(AlbumsPage);