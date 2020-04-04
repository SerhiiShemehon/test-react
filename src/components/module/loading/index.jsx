import React from 'react';

import './loading.scss'

export const Loading = () => {
	return (
		<div className="loading-holder">
			<div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		</div>
	)
}