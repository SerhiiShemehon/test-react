import React from 'react';
import { Link  } from "react-router-dom";

import './style.scss'

export const AlbumsList = ({
	albums,
	photos
}) => {

	const numberAlbumsUser = (data, userId) => {
		let currentAlbumsData = data.filter( item => +item.albumId === +userId);
		if (currentAlbumsData.length > 0) {
			return currentAlbumsData.length;
		} else {
			return 'no data';
		}
	}

	const firstImage = (data, userId) => {
		let currentAlbumsData = data.find( item => +item.albumId === +userId);

		if (currentAlbumsData && currentAlbumsData.thumbnailUrl) {
			return currentAlbumsData.thumbnailUrl;
		} else {
			return null;
		}
	}

	return (
		<div className="albums-list">
			{albums.map( (album, i) => <div key={i} className="album-item">
				<Link
					to={`/albums/album/${album.id}`}
					className="album-holder"
					style={{backgroundImage: `url(${firstImage(photos, album.id)})`}}
				>
					<h3 className="title">
						{album.title}
						<span>photos: {numberAlbumsUser(photos, album.id)}</span>
					</h3>
				</Link>
			</div>)}
		</div>
	)
}