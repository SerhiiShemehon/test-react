import React from 'react';
import { NavLink  } from "react-router-dom";

import './style.scss'

import { MenuList } from "../../../data";


export const PrimaryNav = () => {
	return (
		<ul className="primary-nav">
			{MenuList.map( (item , i) => <li key={i}>
				<NavLink to={item.link}>{item.title}</NavLink>
			</li> )}
		</ul>
	)
}
