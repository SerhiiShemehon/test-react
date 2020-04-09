import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Loading } from '../'

import './style.scss';

const root = document.getElementById('root');

const ModalImage = ({
	image,
	title,
	handleClick
}) => {
	const modalHolder = document.createElement('div');
	modalHolder.classList.add('modal-holder')

	useEffect(() => {
		root.appendChild(modalHolder);
		return () => {
			root.removeChild(modalHolder);
		};
	}, []);

	return ReactDOM.createPortal(
		<div className="image-modal">
			<button className="close" onClick={handleClick}>close</button>
			{image
			? <img src={image} alt={title} />
			: <Loading /> }
		</div>,
		modalHolder
  );
}

const Photo = ({photo}) => {
	const [showModal, setShowHideb] = useState(false);

	const showHide = () => {
		setShowHideb(!showModal);
	}

	return (
		<div className="photo-item">
			<div className="photo-holder" onClick={showHide}>
				<picture>
					<img src={photo.thumbnailUrl} alt={photo.title}/>
				</picture>
				<h3 className="title">{photo.title}</h3>
			</div>
			{showModal && <ModalImage image={photo.url} title={photo.title} handleClick={showHide}/>}
		</div>
	)
}

export const PhotosList = ({photos}) => {
	return (
		<div className="photos-list">
			{photos && photos.map( (photo, i) => <Photo key={i} photo={photo} />)}
		</div>
	)
}