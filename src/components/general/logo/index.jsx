import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss'

export const Logo = () => {
	return (
		<div className="logo">
			<Link to="/">Placeholder <span>JSON</span></Link>
		</div>
	)
}