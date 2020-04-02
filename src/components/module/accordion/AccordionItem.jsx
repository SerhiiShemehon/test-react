import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

export const AccordionItem = ({
		title,
		description,
		handleAccordion,
		currentKey,
		currentOpenTab
	}) => {

	const [heightAccordionTab, setHeight] = useState(0);
	const [currentOpen, setOpen] = useState(false);
	const currentTab = useRef(null)
	const currentTabHolder = useRef(null)

	const handleCurrentAccordionTab = () => {
		if(!currentOpen){
			currentTab.current.style.height = heightAccordionTab + 'px';
		} else {
			currentTab.current.style.height = 0;
		}
		setOpen(!currentOpen);
	}

	const updateResize = () => {
		setHeight(currentTabHolder.current.clientHeight);
		currentTab.current.style.height = 0;
		setOpen(false);
	}

	useLayoutEffect(() => {
		window.addEventListener('resize', updateResize);
    return () => window.removeEventListener('resize', updateResize);
	})

	useEffect(() => {
		setHeight(currentTabHolder.current.clientHeight);
		currentTab.current.style.height = 0;
	},[]);

	useEffect(() => {
		if (currentOpenTab !== currentKey){
			currentTab.current.style.height = 0;
			setOpen(false);
		}
	},[currentOpenTab, currentKey]);

	return (
		<div className={`accordion-tab ${currentOpen ? 'open' : ''}`}>
			<div
				className="accordion-header"
				onClick={()=>{
					handleAccordion(currentKey)
					handleCurrentAccordionTab()
				}}
			>
				<h3>{title}</h3>
				<span className="opener"></span>
			</div>
			<div className="accordion-body" ref={currentTab} >
				<div className="accordion-body-holder" dangerouslySetInnerHTML={{__html: description}} ref={currentTabHolder} />
			</div>
		</div>
	)
}
