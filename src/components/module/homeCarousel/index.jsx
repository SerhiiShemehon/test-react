import React from 'react';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import { DataHomeCarousel } from '../../../data';

import './style.scss'

export const HomeCarousel = () => {

	const Slide = (slide) => {
		return (
			<div className="home-slide" style={{backgroundImage: 'url(' + slide.backgroundImg + ')'}}>
				<div className="container">
					{slide.title && <h2>{slide.title}</h2>}
					{slide.description && <div className="text">{slide.description}</div>}
				</div>
			</div>
		)
	}

	return (
		<div className="carousel-holder">
			<Slider autoplay={3000}>
				{DataHomeCarousel && DataHomeCarousel.map((slide, i) => <div className="slide"  key={i}>
					<div className="home-slide" style={{backgroundImage: 'url(' + slide.backgroundImg + ')'}}>
						<div className="container">
							{slide.title && <h2>{slide.title}</h2>}
							{slide.description && <div className="text" dangerouslySetInnerHTML={{__html: slide.description}} />}
						</div>
					</div>
				</div>)}
			</Slider>
		</div>
	)
}

