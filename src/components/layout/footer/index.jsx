import React from 'react';

import { Logo } from "../../";

import './style.scss'

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<Logo />
				<div className="copyright">Copyright © {new Date().getFullYear()}</div>
			</div>
		</footer>
	)
}