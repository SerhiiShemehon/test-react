import React, { useState } from 'react';

import './style.scss'

export const Tabs = ({data}) => {
	const [currentOpenTab, setOpenTab] = useState(0);

	const handleOpenTab = (elemTab) => {
		setOpenTab(elemTab);
	}

	return (
		data && <div className="tabs">
			<div className="tabs-nav">
				<ul>
					{data.map( (item, i) => <li key={i}>
						<span
							className={`tabs-nav-item ${i === currentOpenTab ? 'open' : ''}`}
							onClick={()=>{handleOpenTab(i)}}
						>{item.title}</span>
					</li>)}
				</ul>
			</div>
			<div className="tabs-body">
				{data.map( (item, i) => <div key={i} className={`tab-item ${i === currentOpenTab ? 'open' : ''}`}>
					<div className="tab-item-holder" dangerouslySetInnerHTML={{__html: item.description}}/>
				</div>)}
			</div>
		</div>
	)
}