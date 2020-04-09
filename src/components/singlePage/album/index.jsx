import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Loading, ErrorPage, PhotosList } from '../../'

import './style.scss'

const AlbumItemPage = ({
	match,
	isErrorAlbums,
	isLoadingAlbums,
	albumsData,
	photosData
}) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const albumItem = albumsData.find((item)=> +item.id === +match.params.id);
	const currentAlbumsData = photosData.filter( item => +item.albumId === +albumItem.id);

	return (
		<div className="container container-padding">
			{ isLoadingAlbums
				? <Loading />
				: isErrorAlbums
					? <ErrorPage />
					: albumItem && <div className="album-page-item">
						<h1 className="decor decor-center text-center">{albumItem.title}</h1>
						{currentAlbumsData && <PhotosList photos={currentAlbumsData} />}
					</div>
			}
		</div>
	)
}

const mapStateToProps = (state) => ({
	isErrorAlbums: state.albumsReducer.isErrorAlbums,
  isLoadingAlbums: state.albumsReducer.isLoadingAlbums,
	albumsData: state.albumsReducer.albumsData,
	isErrorPhotos: state.photosReducer.isErrorPhotos,
	isLoadingPhotos: state.photosReducer.isLoadingPhotos,
	photosData: state.photosReducer.photosData
});


export const AlbumItemPageWrapper = connect(
  mapStateToProps
)(AlbumItemPage);