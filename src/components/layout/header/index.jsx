import React from 'react';

import { PrimaryNav, Logo } from "../../";

import './style.scss'

export const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<Logo />
				<PrimaryNav />
			</div>
		</header>
	);
};